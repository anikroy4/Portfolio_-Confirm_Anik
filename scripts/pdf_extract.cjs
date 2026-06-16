const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

const file = path.resolve(__dirname, '..', 'public', 'resume.pdf');
if (!fs.existsSync(file)) { console.error('file not found', file); process.exit(1); }
const data = new Uint8Array(fs.readFileSync(file));

pdfjsLib.getDocument({data}).promise.then(async (doc) => {
  let out = '';
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str || '');
    out += strings.join(' ') + '\n\n';
  }
  console.log(out);
}).catch(err => { console.error('ERROR', err); process.exit(1); });
