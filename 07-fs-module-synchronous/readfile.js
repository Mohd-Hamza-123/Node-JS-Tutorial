import fs from 'fs'
import path from 'path';

console.log('Start Reading file');
const data = fs.readFileSync(path.join('public', 'sample.txt'), 'utf8')
console.log(data)
console.log('File read successfully');


