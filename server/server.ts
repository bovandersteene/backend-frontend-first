const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 2000;

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
        // Create a request including the queryString
        output = fs.readFileSync(`./server${pathname}/${request.method}_${queryString}.json`, 'utf8');
      } else {
        output = fs.readFileSync(`./ server${pathname} /${request.method}.json`, 'utf8');
      }
      responseCode = output.statusCode || 200;
      if (output.error) {
        // If a file contains an error, the statuscode of that file will be taken or by default 400
        responseCode = output.statusCode || 400;
        output = JSON.stringify({ error: output.error });
      }
    } catch (exception) {
      // If a file is not found, by default 404
      responseCode = 404;
      output = JSON.stringify({ error: exception });
    }

    // Allows you to use CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Write the right resonsecode to your response head
    res.writeHead(responseCode, { 'Content-type': 'application/json' });
    res.end(output);
  })
  .listen(port, 'localhost');
console.log(`Server running at http://localhost:${port}`);
