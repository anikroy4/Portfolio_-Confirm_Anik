const fs = require('fs');
const pdf = require('pdf-parse/dist/pdf-parse/cjs/index.cjs');

const buf = fs.readFileSync(require('path').resolve(__dirname, '..', 'public', 'resume.pdf'));

pdf(buf).then(data => {
  console.log(data.text);
}).catch(err => {
  console.error('ERROR', err);
  process.exit(1);
});
