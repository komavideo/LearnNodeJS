非阻塞处理好难懂
===============

## 知识点

* 阻塞处理(Java,Ruby,PHP,Asp.Net)
* 非阻塞处理(Node.js)

## 实战演习

~~~javascript
////////////////////
// 阻塞处理
////////////////////
function updb1() {
    var start = new Date().getTime();
    while (new Date().getTime() < start + 3000);
}
updb1();
//数据库更新完毕
console.log("updb1 success.");
console.log("I like javascript.");

////////////////////
// 非阻塞处理
////////////////////
function updb2(done) {
    setTimeout(() => {
        done();
    }, 3000);
}
updb2(function () {
    //数据库更新完毕
    console.log("updb2 success.");
});
console.log("I like Nodejs.");
~~~

## 课程文件

https://gitee.com/komavideo/LearnNodeJS

## 小马视频频道

http://komavideo.com
