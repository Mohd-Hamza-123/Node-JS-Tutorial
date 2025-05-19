import fs from 'fs/promises'
import path from 'path';

const readFile = async () => {
    try {
        const data = await fs.readFile(path.join('public', 'sample.txt'), 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFile()