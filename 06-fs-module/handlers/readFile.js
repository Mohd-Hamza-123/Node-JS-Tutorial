import fs from 'fs'
import path from 'path';

const readFileHandler = (req, res) => {
    fs.readFile(path.join('public', 'readFile.txt'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error: Can\'t read the file');
        } else {
            console.log('File read successfully!');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    })
}

export default readFileHandler;