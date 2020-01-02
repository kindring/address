const router = require('koa-router')();

const address = require('../controller/address.js')
router.get('/',async (ctx)=>{
    await ctx.render('index.html',{
        title:"welcome to this address chose"
    });
    //ctx.body = '首页';
});

//省份数据
router.get('/province',async ctx=>{
    try{
        let result = await address.province();
        ctx.body = {
            code:200,
            result:result
        } 
    }catch(err){
        console.log(err.message);
        ctx.body = {
            code:300,
            message:err.message,
            descript:'出现错误了呢'
        };
    }
    
});

//市数据  动态路由
router.get('/citys/:province',async ctx=>{
    try{
        let province = ctx.params.province;
        console.log(province);
        if(!province){
            return ctx.body = {
                code:400,
                message:"错误的请求"
            }
        }
        let result = await address.city(province);
        ctx.body = {
            code:200,
            result:result
        } 
    }catch(err){
        console.log(err.message);
        ctx.body = {
            code:500,
            message:err.message,
            descript:'出现错误了呢'
        };
    }
});

//区域数据
router.get('/area/:city',async ctx=>{
    try{
        let city = ctx.params.city;
        console.log(city);
        if(!city){
            return ctx.body = {
                code:400,
                message:"错误的请求"
            }
        }
        let result = await address.area(city);
        ctx.body = {
            code:200,
            result:result
        } 
    }catch(err){
        console.log(err.message);
        ctx.body = {
            code:500,
            message:err.message,
            descript:'出现错误了呢'
        };
    }
});

//街道数据
router.get('/street/:area',async ctx=>{
    try{
        let area = ctx.params.area;
        if(!area){
            return ctx.body = {
                code:400,
                message:"错误的请求"
            }
        }
        let result = await address.street(area);
        ctx.body = {
            code:200,
            result:result
        } 
    }catch(err){
        console.log(err.message);
        ctx.body = {
            code:500,
            message:err.message,
            descript:'出现错误了呢'
        };
    }
});

module.exports = router;