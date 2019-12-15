koa 是node的轻量级开发框架

comment create table comment
{
    id int primary key, 
    name varchar(10),
    moment date,
    postid int foreign key,
    avatar varchar(100)
}

id 
name 用户名称
content 
moment 评论时间
postid 文章id
avatar 用户头像
 
npm i koa koa-router koa-views ejs koa-static mysql koa-bodyparser

- mvc 
  routers 一个模块一个文件
  