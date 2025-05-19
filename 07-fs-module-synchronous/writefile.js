import fs from 'fs';
import path from 'path';

const filePath = path.join('public', 'writefile.txt');
const content = 'This is some example text to write into the file.';

try {
    console.log('Writing to file...');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('File written successfully!');
} catch (err) {
    console.error('Error writing to file:', err);
}
