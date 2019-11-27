const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/index.html', 'utf-8', function (err, data) {
        if (err) {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not Founded.');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.end(data);
        }
    });
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});