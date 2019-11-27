做个小论坛
==========

## 知识点

* 做一个含有表单的论坛网页

## 实战演习

### forum.ejs

~~~html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>小论坛</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="content" id="content">
        <input type="submit" value="提交">
        <ul>
            <% for(var i = 0; i < posts.length; i++) { %>
            <li><%= posts[i] %></li>
            <% } %>
        </ul>
    </form>
</body>
</html>
~~~

## 课程文件

https://gitee.com/komavideo/LearnNodeJS

## 小马视频频道

http://komavideo.com
