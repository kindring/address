const koa = require('koa');
// const Router = require('koa-router');

const views = require('koa-views');
const app = new koa();

let router = require('./router/router');//主页的路由

// let router = new Router();

// app.use(views('views',{
//     extension:'ejs'/* 应用ejs模板引擎  ,这种方式后缀为ejs*/
// }));
//配置ejs模板引擎
app.use(views('views',{map:{html:'ejs'}}));//这样配置也行  这种配置必须带后缀


// const main = ctx => {
//     ctx.response.body = 'hello world';
// }


//get传值
// router.get('/new',async ctx=>{
//     console.log(ctx.query);//obj
//     console.log(ctx.querystring);//字符串

// });
//动态路由
// router.get('/video/av:aid',async ctx=>{
//     ctx.body = ctx.params;
//     console.log(ctx.params);//{aid:'值'}
// });

//使用路由
app.use(router.routes())

app.listen(8080,()=>{
    console.log('server is running . . . . . .');
})