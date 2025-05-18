import fs from 'fs'
import path from 'path';

const updateFileHandler = (req, res) => {
    const content = 'This file is updated by the server';
    fs.writeFile(path.join('public', 'updatefile.txt'), content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error: Can\'t update the file');
        } else {
            console.log('File updated and saved successfully!');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File updated and saved successfully!');
        }
    })
}

export default updateFileHandler;