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
// dbupAsync("2.sql1")
//     .then(() => dbupAsync("2.sql2"))
//     .then(() => dbupAsync("3.sql3"));

// 代码更加简洁的async/await
async function upAllDB() {
    const result1 = await dbupAsync("3.sql1");
    const result2 = await dbupAsync("3.sql2");
    const result3 = await dbupAsync("3.sql3");
    console.log(result1, result2, result3);
}
upAllDB();
