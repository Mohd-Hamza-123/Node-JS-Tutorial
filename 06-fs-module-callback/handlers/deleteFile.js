import path from 'path';
import fs from 'fs';

const deleteFileHandler = (req,res)=>{
    const filePath = path.join('public', 'sample.txt');
    
    fs.unlink(filePath, (err) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error: Can't delete the file");
            console.error("File deletion error:", err.message);
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("File deleted successfully!");
        console.log("File deleted successfully!");
    });
}


export default deleteFileHandler;