const fs = require('fs');
const pdf = require('pdf-parse');

const file = process.argv[2];
if (!file) {
  console.error('Usage: node extract_pdf.js <pdf-path>');
  process.exit(1);
}

const dataBuffer = fs.readFileSync(file);

pdf(dataBuffer).then(function(data) {
  console.log(data.text);
}).catch(err => {
  console.error('ERROR', err);
  process.exit(1);
});
