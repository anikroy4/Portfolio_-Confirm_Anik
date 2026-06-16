const fs = require('fs');
const path = require('path');

// Safer extractor: copy the PDF to public/resume.pdf and print a short report.
// This avoids runtime issues with native PDF parsers in different Node environments.

const file = process.argv[2];
if (!file) {
  console.error('Usage: node extract_pdf.cjs <pdf-path>');
  process.exit(1);
}

const abs = path.resolve(file);
if (!fs.existsSync(abs)) {
  console.error('ERROR: file not found:', abs);
  process.exit(1);
}

const outDir = path.resolve(__dirname, '..', 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'resume.pdf');

try {
  fs.copyFileSync(abs, outPath);
  const stats = fs.statSync(outPath);
  console.log('OK: copied to', outPath);
  console.log('Size:', stats.size, 'bytes');
  process.exit(0);
} catch (err) {
  console.error('ERROR copying file:', err.message || err);
  process.exit(1);
}
