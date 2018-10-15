const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 4000;

http
  .createServer((request, res) => {
    const pathname = url.parse(request.url).pathname;
    let output;
    let responseCode = 200;

    const queryParams = url.parse(request.url, true).query;
    const queryString = Object.keys(queryParams)
      .map((key) => `${key}-${queryParams[key]}`)
      .join('_');

    try {
      if (queryString) {
        output = fs.readFileSync(`./server${pathname}/${request.method}_${queryString}.json`, 'utf8');
      } else {
        output = fs.readFileSync(`./ server${pathname} /${request.method}.json`, 'utf8');
      }
      if (output.error) {
        responseCode = 400;
        output = JSON.stringify({ error: output.error });
      }
    } catch (exception) {
      responseCode = 404;
      output = JSON.stringify({ error: exception });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.writeHead(responseCode, { 'Content-type': 'application/json' });
    res.end(output);
  })
  .listen(port, 'localhost');
console.log(`Server running at http://localhost:${port}`);
