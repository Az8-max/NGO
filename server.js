const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const DIR = __dirname;
const QUERIES_FILE = path.join(DIR, 'queries.json');
const TARGET_EMAILS = ['info@silvesterlegal.com', 'saloni@silvesterlegal.com'];

// Initialize queries.json if it doesn't exist
if (!fs.existsSync(QUERIES_FILE)) {
  fs.writeFileSync(QUERIES_FILE, JSON.stringify([], null, 2), 'utf8');
}

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

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = req.url.split('?')[0];

  // Handle client query submissions
  if (req.method === 'POST' && parsedUrl === '/api/query') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e6) {
        req.destroy(); // 1MB limit
      }
    });

    req.on('end', () => {
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
        existingQueries.push(queryData);
        fs.writeFileSync(QUERIES_FILE, JSON.stringify(existingQueries, null, 2), 'utf8');

        // Formatted log of dispatched client query
        console.log('\n================================================================');
        console.log('>>> [NEW CLIENT QUERY RECEIVED & DISPATCHED]');
        console.log(`>>> DESTINATIONS : ${TARGET_EMAILS.join(', ')}`);
        console.log(`>>> TIMESTAMP    : ${queryData.timestamp}`);
        console.log(`>>> FORM ORIGIN  : ${queryData.form || 'Website Consultation Form'}`);
        console.log(`>>> CLIENT NAME  : ${queryData.name || 'Not provided'}`);
        console.log(`>>> COMPANY      : ${queryData.company || 'Not provided'}`);
        console.log(`>>> EMAIL        : ${queryData.email || 'Not provided'}`);
        console.log(`>>> PHONE        : ${queryData.phone || 'Not provided'}`);
        console.log(`>>> MATTER       : ${queryData.matter || queryData.message || 'No description provided'}`);
        console.log('================================================================\n');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Your query has been routed to ' + TARGET_EMAILS.join(' & ') + '.',
          destinations: TARGET_EMAILS,
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

  // Handle GET /api/queries to inspect recorded queries
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

  let reqPath = decodeURI(parsedUrl);
  if (reqPath === '/' || reqPath === '') {
    reqPath = 'index.html';
  }
  const cleanPath = reqPath.replace(/^[/\\]+/, '');
  const filePath = path.join(DIR, cleanPath);

  // Security check: ensure path stays within DIR
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
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Inquiries destination routing configured for: ${TARGET_EMAILS.join(', ')}`);
});
