import fs from 'fs'
import path from 'path';

const createFileHandler = (req, res) => {
    const content = 'this is a created sample file';
    fs.writeFile(path.join('public', 'createdFile.txt'), content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error: Can\'t create the file');
        } else {
            console.log('File created and saved successfully!');
            res.writeHead(200, { 'Content-Type': 'text/plain' });   
            res.end('File created and saved successfully!');
        }
    })

}


export default createFileHandler;