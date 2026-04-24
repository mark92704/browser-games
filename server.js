const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DIR = __dirname;

const mime = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(DIR, req.url === '/' ? '/index.html' : req.url);
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('  Tic Tac Toe -> http://localhost:' + PORT + '/tictactoe.html');
  console.log('  Space Shooter -> http://localhost:' + PORT + '/galaga.html');
  console.log('\nPress Ctrl+C to stop.');
});
