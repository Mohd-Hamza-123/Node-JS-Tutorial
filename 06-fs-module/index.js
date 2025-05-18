import http from 'http';
import deleteFileHandler from './handlers/deleteFile.js';
import createFileHandler from './handlers/createFile.js';
import updateFileHandler from './handlers/updateFile.js';
import readFileHandler from './handlers/readFile.js';

const server = http.createServer((req, res) => {
    if (req.url === '/readfile') readFileHandler(req, res)
    if (req.url === '/createfile') createFileHandler(req, res)
    if (req.url === '/deletefile') deleteFileHandler(req, res)
    if (req.url === '/updatefile') updateFileHandler(req, res)
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
