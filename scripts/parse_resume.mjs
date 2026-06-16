import fs from 'fs';
import pdf from 'pdf-parse';

const buf = fs.readFileSync(new URL('../public/resume.pdf', import.meta.url));

const data = await pdf(buf);
console.log(data.text);
