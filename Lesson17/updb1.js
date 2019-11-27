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
