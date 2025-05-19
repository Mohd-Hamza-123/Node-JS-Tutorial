import fs from 'fs';
import path from 'path';

fs.unlinkSync(path.join('public', 'deletefile.txt'));
console.log('File deleted successfully');