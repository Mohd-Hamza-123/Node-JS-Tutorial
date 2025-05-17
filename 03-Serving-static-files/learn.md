Node.js comes with several core modules that provide essential functionality for building applications. These modules eliminate the need for additional dependencies in many cases. Here are some of the most important ones:

---

### **1. `fs` (File System)**

* Used for interacting with the file system, such as reading, writing, deleting, or modifying files.
* Examples:

  ```javascript
  const fs = require('fs');

  // Reading a file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  // Writing to a file
  fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully');
  });
  ```

---

### **3. `path`**

* Provides utilities for working with file and directory paths.
* Examples:

  ```javascript
  const path = require('path');

  console.log(path.basename('/folder/example.txt')); // example.txt
  console.log(path.join(__dirname, 'folder', 'file.txt')); // /current_dir/folder/file.txt
  ```

---

### **4. `os` (Operating System)**

* Provides information about the operating system and computer resources.
* Examples:

  ```javascript
  const os = require('os');

  console.log(os.platform()); // e.g., linux, win32, darwin
  console.log(os.totalmem()); // Total memory in bytes
  console.log(os.cpus()); // CPU information
  ```

---

### **5. `events`**

* Implements the event-driven architecture, allowing you to create and handle custom events.
* Examples:

  ```javascript
  const EventEmitter = require('events');
  const emitter = new EventEmitter();

  emitter.on('event', () => {
    console.log('An event occurred!');
  });

  emitter.emit('event');
  ```

---

### **6. `util`**

* Contains utility functions for debugging and other purposes, like `promisify` to convert callback-based functions into promise-based.
* Examples:

  ```javascript
  const util = require('util');
  const fs = require('fs');

  const readFile = util.promisify(fs.readFile);

  async function read() {
    const data = await readFile('example.txt', 'utf8');
    console.log(data);
  }

  read();
  ```

---

### **7. `stream`**

* Provides APIs for working with streaming data (e.g., reading a file line by line or sending data chunks).
* Examples:

  ```javascript
  const fs = require('fs');
  const readable = fs.createReadStream('example.txt');

  readable.on('data', (chunk) => {
    console.log(`Received chunk: ${chunk}`);
  });
  ```

---

### **8. `querystring`**

* Parses and formats URL query strings.
* Examples:

  ```javascript
  const querystring = require('querystring');

  const parsed = querystring.parse('name=Hamza&age=25');
  console.log(parsed); // { name: 'Hamza', age: '25' }

  const stringified = querystring.stringify({ name: 'Hamza', age: 25 });
  console.log(stringified); // name=Hamza&age=25
  ```

---

### **9. `crypto`**

* Provides cryptographic functionality, such as hashing, encryption, and signing.
* Examples:

  ```javascript
  const crypto = require('crypto');

  const hash = crypto.createHash('sha256').update('password').digest('hex');
  console.log(hash); // Hashed value of 'password'
  ```

---

### **10. `child_process`**

* Allows spawning and managing child processes.
* Examples:

  ```javascript
  const { exec } = require('child_process');

  exec('ls', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout); // Output of 'ls' command
  });
  ```

---

### **11. `url`**

* Provides utilities for URL resolution and parsing.
* Examples:

  ```javascript
  const url = require('url');

  const parsedUrl = new URL('https://example.com:8000/path?name=Hamza');
  console.log(parsedUrl.hostname); // example.com
  console.log(parsedUrl.searchParams.get('name')); // Hamza
  ```

---

These modules form the backbone of many Node.js applications. Mastering them will give you a strong foundation for Node.js development.
