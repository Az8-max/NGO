# Silvester Legal - Landing Page

Recreated landing page for **Silvester Legal** (International Arbitration & SIAC Counsel, Singapore) with Google Tag Manager integration.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Embedded Assets**: Self-contained high-resolution assets and styling.
- **Google Tag Manager**: Configured with Container ID `GTM-53FVN9W`.
  - Head tracking script immediately after `<head>`
  - Body `<noscript>` iframe fallback immediately after `<body>`

## Files

- `index.html`: Main landing page entrypoint with GTM snippets.
- `silvester-landing-final-version.html`: Standalone landing page file.
- `server.js`: Lightweight local development HTTP server.

## Local Development

To run the site locally:

```bash
node server.js
```

Then visit [http://localhost:3000/](http://localhost:3000/) in your browser.

## Deployment

Automated GitHub Pages deployment is configured via GitHub Actions in `.github/workflows/deploy.yml`. Every push to `main` publishes the static site directly to the `gh-pages` branch.
