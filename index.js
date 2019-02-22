const https = require('https');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  getQuestion();
  res.setHeader('Content-Type', 'text/plain');
  res.end("Done\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});