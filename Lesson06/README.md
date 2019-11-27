设定文件的设定
============

## 知识点

* require:引用外部js文件

## 实战演习

### config.js

~~~javascript
const config = {
    hostname: '127.0.0.1',
    port: '3000'
};

exports.config = config;
~~~

### myserver.js

~~~javascript
const http = require('http');
const config = require('./config').config;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(config.port, config.hostname, () => {
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
~~~

## 课程文件

https://gitee.com/komavideo/LearnNodeJS

## 小马视频频道

http://komavideo.com
