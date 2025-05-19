import fs from 'fs/promises'
import path from 'path';


const deleteFile = async () => {
    try {
        await fs.unlink(path.join('public', 'delete.txt'));
        console.log('File deleted successfully');
    } catch (error) {
        console.error('Error deleting file:', error);
    }
}

deleteFile()