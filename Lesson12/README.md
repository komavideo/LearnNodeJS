表单的处理
==========

## 知识点

* 服务器表单的处理

## 实战演习

### myserver.js

~~~javascript
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const qs = require('querystring'); //+

var template = fs.readFileSync(__dirname + '/forum.ejs', 'utf-8');
var posts = []; //+

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        //表单提交
        req.data = "";
        req.on("readable", function () {
            //表单数据收集
            var chr = req.read();
            if (chr)
                req.data += chr;
        });
        req.on("end", function () {
            //表单处理
            var query = qs.parse(req.data);
            posts.push(query.content);
            showForm(posts, res);
        });
    } else {
        //表单显示
        showForm(posts, res);
    }
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function showForm(p_posts, res) {
    var data = ejs.render(template, {
        title: 'helo ejs',
        posts: p_posts
    });
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(data);
}
~~~

## 课程文件

https://gitee.com/komavideo/LearnNodeJS

## 小马视频频道

http://komavideo.com
