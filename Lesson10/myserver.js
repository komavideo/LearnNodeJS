const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
var template = fs.readFileSync(__dirname + '\\..\\Lesson09\\helo.ejs', 'utf-8');
const server = http.createServer((req, res) => {
    var data = ejs.render(template, {
        title: 'helo ejs',
        content: '<strong>big helo ejs.</strong>'
    });
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(data);
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
