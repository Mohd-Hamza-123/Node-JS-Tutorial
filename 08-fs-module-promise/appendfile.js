import fs from 'fs/promises'
import path from 'path';

const appendFile = async () => {
    try {
        const content = 'mohd hamza'
        await fs.appendFile(path.join('public','append.txt'), content, 'utf8');
    } catch (error) {
        console.error('Error appending file:', error);
    }
}

appendFile()