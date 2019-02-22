import express = require('express');
import https = require('https');

const app: express.Application = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Done\n");
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});