连接MongoDB
===========

## 知识点

* mongodb驱动安装
* node.js连接MongoDB

## 实战演习

### mongodb驱动安装

官方网站：

http://mongodb.github.io/node-mongodb-native/

~~~bash
$ npm install mongodb [--save]
~~~

PS：Mongoose也是一个非常不错的MongoDB存取API，也推荐给您。

### node.js操作MongoDB

#### mongofunc.js

~~~javascript
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'komablog';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});
~~~

## 课程文件

https://gitee.com/komavideo/LearnNodeJS

## 小马视频频道

http://komavideo.com
