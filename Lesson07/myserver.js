const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    switch (req.url) {
        case '/':
            res.end('helo world.');
            break;
        case '/about':
            res.end('This is about page.');
            break;
        case '/home':
            res.end('Welcome to my homepage!');
            break;
        default:
            res.end('NotFound!');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});