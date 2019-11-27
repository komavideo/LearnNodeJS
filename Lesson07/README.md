URL为我指引方向
==============

## 知识点

* req.url:返回客户端请求的url地址

## 实战演习

~~~javascript
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
~~~

## 课程文件

https://gitee.com/komavideo/LearnNodeJS

## 小马视频频道

http://komavideo.com
