import http from 'http'
import { logger } from './middleware/logger.js';

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.write(JSON.stringify({ message: req?.message, status: 'ok' }));
        res.end();
    })
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});