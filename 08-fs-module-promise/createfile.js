import fs from 'fs/promises'
import path from 'path';

const createFile = async () => {
    try {
        const content = 'This is some example text to write into the file.';
        await fs.writeFile(path.join('public', 'write.txt'), content, 'utf8');
    } catch (error) {
        console.error('Error reading file:', err);
    }
}

createFile()