插入MongoDB文档
==============

## 知识点

* node.js操作MongoDB

## 实战演习

### mongofunc.js

~~~javascript
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://192.168.11.18:27017';

// Database Name
const dbName = 'komablog';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    db.collection("posts", function (err, collection) {
        var list = [
            {title:"我爱玩马里奥", tag:"game"},
            {title:"我喜欢Nodejs编程", tag:"it"},
            {title:"我会用MongoDB", tag:"it"}
        ];
        collection.insert(list, function (err, result) {
            assert.equal(null, err);
            client.close();
        });
    });
});
~~~

## 课程文件

https://gitee.com/komavideo/LearnNodeJS

## 小马视频频道

http://komavideo.com
