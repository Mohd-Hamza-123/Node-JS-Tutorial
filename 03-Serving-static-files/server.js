import url from 'url'
import http from "http"
import path from 'path'
import fs from 'fs/promises'

const __fileName = url.fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)

const server = http.createServer(async (request, response) => {
    if (request.url === '/') {
        const filePath = 'public/templates/index.html'
        const readFile = await fs.readFile(filePath)
        response.writeHead(200, { "content-type": "text/html" })
        response.write(readFile);
        response.end()
    } else if (request.url === '/about') {
        console.log(__dirName)
        const filePath = path.join(__dirName, 'public', 'templates', 'about.html')
        const data = await fs.readFile(filePath)
        response.writeHead(200, { "content-type": "text/html" })
        response.write(data)
        response.end()
    }
})

export default server