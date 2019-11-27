Promise帮我逃出地狱
==================

## 知识点

* Node.js回调地狱
* Promise承诺解决

## 回调地狱

Node.js是非阻塞编程，那么在编码过程中会遇到很多的回调函数（Callback），如果多个处理的回调函数嵌套在一起的话，就会形成回调地狱，虽然对于程序的结果没有任何影响，但对于程序代码的可读性来说就是个地狱。

~~~javascript
//回调地狱
function dbupd(sql, done) {
    setTimeout(() => done(sql + " upd ok."), 800);
}
dbupd("1.sql1", result => {
    console.log(result);
    dbupd("2.sql2", result => {
        console.log(result);
        dbupd("3.sql3", result => {
            console.log(result);
        });
    });
});

~~~

## Promise解决

~~~javascript
// Promise函数嵌套解决方法
function dbupAsync(sql) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(sql + " upd ok.");
            resolve(sql + ".ok");
        }, 800)
    });
    return p;
}
dbupAsync("2.sql1")
    .then(() => dbupAsync("2.sql2"))
    .then(() => dbupAsync("3.sql3"));

// 代码更加简洁的async/await
async function upAllDB() {
    const result1 = await dbupAsync("3.sql1");
    const result2 = await dbupAsync("3.sql2");
    const result3 = await dbupAsync("3.sql3");
    console.log(result1, result2, result3);
}
upAllDB();
~~~

## 课程文件

https://gitee.com/komavideo/LearnNodeJS

## 小马视频频道

http://komavideo.com
