const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexHtmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: build/index.html not found. Make sure to run "npm run build" first.');
  process.exit(1);
}

let htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Regex to find the main CSS link
// Example: <link href="/static/css/main.513a893d.css" rel="stylesheet">
const cssLinkRegex = /<link href="(\/static\/css\/main\.[a-z0-9]+\.css)" rel="stylesheet">/;
const match = htmlContent.match(cssLinkRegex);

if (match) {
  const cssRelativePath = match[1];
  const cssPath = path.join(buildDir, cssRelativePath.replace(/^\//, '')); // Remove leading slash

  if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    const styleTag = `<style>${cssContent}</style>`;

    // Replace the link tag with the style tag
    htmlContent = htmlContent.replace(match[0], styleTag);

    fs.writeFileSync(indexHtmlPath, htmlContent, 'utf8');
    console.log(`Successfully inlined CSS from ${cssRelativePath} into index.html`);
  } else {
    console.warn(`Warning: CSS file found in HTML but not on disk: ${cssPath}`);
  }
} else {
  console.log('No main CSS link found to inline.');
}
