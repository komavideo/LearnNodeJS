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