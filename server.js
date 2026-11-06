const http = require('http');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3001;
const DIR = __dirname;
const QUERIES_FILE = path.join(DIR, 'queries.json');
const TARGET_EMAILS = ['info@silvesterlegal.com', 'saloni@silvesterlegal.com'];

// Initialize queries.json if it doesn't exist
if (!fs.existsSync(QUERIES_FILE)) {
  fs.writeFileSync(QUERIES_FILE, JSON.stringify([], null, 2), 'utf8');
}

// Setup email transporter
let transporter = null;
let etherealAccount = null;

async function initMailer() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    console.log(`[MAIL] Production SMTP configured via ${process.env.SMTP_HOST}:${process.env.SMTP_PORT || 587}`);
  } else {
    try {
      etherealAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: etherealAccount.user,
          pass: etherealAccount.pass
        }
      });
      console.log('[MAIL] Ethereal Test Mailer initialized.');
      console.log(`[MAIL] Sent emails will have a live viewable preview link!`);
    } catch (err) {
      console.warn('[MAIL] Could not create Ethereal account, falling back to console logging:', err.message);
    }
  }
}

initMailer();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.zip': 'application/zip'
};

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = req.url.split('?')[0];

  // 1. POST /api/query - Receive and dispatch consultation inquiries
  if (req.method === 'POST' && parsedUrl === '/api/query') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e6) req.destroy();
    });

    req.on('end', async () => {
      try {
        let queryData;
        if (req.headers['content-type'] && req.headers['content-type'].includes('application/json')) {
          queryData = JSON.parse(body);
        } else {
          const params = new URLSearchParams(body);
          queryData = Object.fromEntries(params.entries());
        }

        queryData.timestamp = new Date().toISOString();
        queryData.destinations = TARGET_EMAILS;

        // Persist query to queries.json
        let existingQueries = [];
        try {
          existingQueries = JSON.parse(fs.readFileSync(QUERIES_FILE, 'utf8'));
        } catch (e) {
          existingQueries = [];
        }
        existingQueries.unshift(queryData);
        fs.writeFileSync(QUERIES_FILE, JSON.stringify(existingQueries, null, 2), 'utf8');

        // Formatted log of dispatched client query
        console.log('\n================================================================');
        console.log('>>> [NEW CLIENT CONSULTATION INQUIRY RECEIVED]');
        console.log(`>>> DESTINATIONS : ${TARGET_EMAILS.join(', ')}`);
        console.log(`>>> TIMESTAMP    : ${queryData.timestamp}`);
        console.log(`>>> FORM ORIGIN  : ${queryData.form || 'Website Consultation Form'}`);
        console.log(`>>> CLIENT NAME  : ${queryData.name || 'Not provided'}`);
        console.log(`>>> COMPANY      : ${queryData.company || 'Not provided'}`);
        console.log(`>>> EMAIL        : ${queryData.email || 'Not provided'}`);
        console.log(`>>> PHONE        : ${queryData.phone || 'Not provided'}`);
        console.log(`>>> MATTER       : ${queryData.matter || queryData.message || 'No description provided'}`);

        let previewUrl = null;
        let mailSent = false;

        if (transporter) {
          try {
            const mailOptions = {
              from: process.env.SMTP_FROM || '"Silvester Legal Consultations" <no-reply@silvesterlegal.com>',
              to: 'info@silvesterlegal.com',
              cc: 'saloni@silvesterlegal.com',
              replyTo: queryData.email || undefined,
              subject: `[New Consultation Request] ${queryData.name || 'Client'} - Silvester Legal`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e6eb; border-radius: 10px; background: #ffffff;">
                  <div style="border-bottom: 3px solid #B61329; padding-bottom: 12px; margin-bottom: 20px;">
                    <h2 style="color: #12151C; margin: 0; font-size: 22px;">New Consultation Inquiry</h2>
                    <span style="color: #B61329; font-size: 13px; font-weight: bold;">Silvester Legal LLC &bull; Client Lead Notification</span>
                  </div>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14.5px;">
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-weight: bold; width: 32%; color: #555;">Target Inboxes:</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; color: #12151C;"><b>info@silvesterlegal.com, saloni@silvesterlegal.com</b></td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-weight: bold; color: #555;">Client Name:</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; color: #12151C;">${queryData.name || 'Not provided'}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-weight: bold; color: #555;">Company:</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; color: #12151C;">${queryData.company || 'Not provided'}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-weight: bold; color: #555;">Business Email:</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; color: #B61329;"><a href="mailto:${queryData.email}">${queryData.email || 'Not provided'}</a></td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-weight: bold; color: #555;">Phone:</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; color: #12151C;">${queryData.phone || 'Not provided'}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; font-weight: bold; color: #555;">Matter / Dispute:</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f2; color: #12151C; line-height: 1.5;">${queryData.matter || queryData.message || 'No description provided'}</td></tr>
                    <tr><td style="padding: 10px 0; font-weight: bold; color: #555;">Received At:</td><td style="padding: 10px 0; color: #12151C;">${new Date().toLocaleString()}</td></tr>
                  </table>
                  <div style="margin-top: 24px; padding: 12px; background: #f7f8fa; border-radius: 6px; font-size: 12px; color: #777;">
                    Dispatched automatically to Silvester Legal practice partners.
                  </div>
                </div>
              `
            };

            const info = await transporter.sendMail(mailOptions);
            mailSent = true;
            previewUrl = nodemailer.getTestMessageUrl(info);
            if (previewUrl) {
              console.log(`>>> EMAIL SENT! [Preview on Ethereal]: ${previewUrl}`);
              queryData.previewUrl = previewUrl;
            } else {
              console.log(`>>> EMAIL DISPATCHED via SMTP to ${TARGET_EMAILS.join(', ')}`);
            }
          } catch (mErr) {
            console.error('>>> [MAIL DISPATCH ERROR]:', mErr.message);
          }
        }
        console.log('================================================================\n');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Your query has been routed to ' + TARGET_EMAILS.join(' & ') + '.',
          destinations: TARGET_EMAILS,
          mailSent: mailSent,
          previewUrl: previewUrl,
          query: queryData
        }));
      } catch (err) {
        console.error('Error parsing query submission:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid query payload' }));
      }
    });
    return;
  }

  // 2. GET /api/queries - View JSON history of inquiries
  if (req.method === 'GET' && parsedUrl === '/api/queries') {
    let queries = [];
    try {
      queries = JSON.parse(fs.readFileSync(QUERIES_FILE, 'utf8'));
    } catch (e) {
      queries = [];
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ destinations: TARGET_EMAILS, total: queries.length, queries }, null, 2));
    return;
  }

  // 3. GET /inbox - Visual inquiry lead dashboard
  if (req.method === 'GET' && parsedUrl === '/inbox') {
    let queries = [];
    try {
      queries = JSON.parse(fs.readFileSync(QUERIES_FILE, 'utf8'));
    } catch (e) {
      queries = [];
    }
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Inquiry Leads Inbox | Silvester Legal</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Nunito Sans', sans-serif; background: #f6f7f9; margin: 0; padding: 24px; color: #12151c; }
    .w { max-width: 1100px; margin: 0 auto; }
    .header { display: flex; justify-content: space-between; align-items: center; background: #fff; padding: 20px 28px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin-bottom: 24px; }
    h1 { margin: 0; font-size: 22px; color: #12151c; }
    .badge { background: #B61329; color: #fff; padding: 4px 10px; border-radius: 99px; font-weight: bold; font-size: 13px; }
    .card { background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin-bottom: 16px; border-left: 5px solid #B61329; }
    .meta { font-size: 13px; color: #777; margin-bottom: 8px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 12px; }
    .item { font-size: 14.5px; }
    .item b { color: #333; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 2px; }
    .matter { background: #f8f9fa; padding: 12px 16px; border-radius: 8px; font-size: 14px; line-height: 1.5; }
    a.btn { display: inline-block; background: #12151c; color: #fff; text-decoration: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; font-size: 13px; margin-top: 10px; }
    a.btn:hover { background: #B61329; }
    .preview-link { display: inline-block; margin-top: 8px; color: #B61329; font-weight: bold; text-decoration: none; font-size: 13.5px; }
    .preview-link:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="w">
    <div class="header">
      <div>
        <h1>Silvester Legal Consultation Inquiries</h1>
        <div style="font-size: 13.5px; color: #555; margin-top: 4px;">Target routing: <b>${TARGET_EMAILS.join(', ')}</b></div>
      </div>
      <div>
        <span class="badge">${queries.length} Inquiry Leads Recorded</span>
        <a href="/" class="btn" style="margin-left: 12px;">Visit Landing Page &rarr;</a>
      </div>
    </div>
    ${queries.length === 0 ? '<div class="card" style="text-align: center; color: #777;">No inquiries received yet. Submit a test on the homepage to see it appear here live!</div>' : ''}
    ${queries.map((q, i) => `
      <div class="card">
        <div class="meta">#${queries.length - i} &bull; Received: <b>${new Date(q.timestamp).toLocaleString()}</b> &bull; Origin: ${q.form || 'Consultation Form'}</div>
        <div class="grid">
          <div class="item"><b>Client Name</b>${q.name || 'Not provided'}</div>
          <div class="item"><b>Company</b>${q.company || 'Not provided'}</div>
          <div class="item"><b>Email</b><a href="mailto:${q.email}" style="color: #B61329;">${q.email || 'Not provided'}</a></div>
          <div class="item"><b>Phone</b>${q.phone || 'Not provided'}</div>
        </div>
        <div class="matter"><b>Matter description:</b><br>${q.matter || q.message || 'No details provided'}</div>
        ${q.previewUrl ? `<div><a class="preview-link" href="${q.previewUrl}" target="_blank">&rarr; View Dispatched Email Preview (Ethereal) &nearr;</a></div>` : ''}
      </div>
    `).join('')}
  </div>
</body>
</html>`;
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }

  // 4. Static file server
  let reqPath = decodeURI(parsedUrl);
  if (reqPath === '/' || reqPath === '') {
    reqPath = 'index.html';
  }
  const cleanPath = reqPath.replace(/^[/\\]+/, '');
  const filePath = path.join(DIR, cleanPath);

  if (!filePath.startsWith(DIR)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 Not Found');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n================================================================`);
  console.log(`>>> Silvester Legal Server listening at: http://localhost:${PORT}/`);
  console.log(`>>> Consultation Inquiries Dashboard at: http://localhost:${PORT}/inbox`);
  console.log(`>>> Routing inquiries to: ${TARGET_EMAILS.join(', ')}`);
  console.log(`================================================================\n`);
});
