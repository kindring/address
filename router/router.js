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
    let jsonCallback = ctx.query.jsonCallback;//json的callback回调
    try{
        console.log(ctx.query);
        let result = await address.province();
        if(jsonCallback){
            return ctx.body = jsonCallback+'('+JSON.stringify({
                code:200,
                result:result
            })+')';
        }else{
            ctx.body = {
                code:200,
                result:result
            } 
        }
        
    }catch(err){
        console.log(err.message);
        if(jsonCallback){
            return ctx.body = jsonCallback+'('+JSON.stringify({
                code:500,
                message:err.message,
                descript:'出现错误了呢'
            })+')';
        }else{
            ctx.body = {
                code:500,
                message:err.message,
                descript:'出现错误了呢'
            };
        }
        
    }
    
});

//市数据  动态路由
router.get('/citys/:province',async ctx=>{
    let jsonCallback = ctx.query.jsonCallback;//json的callback回调
    try{
        let province = ctx.params.province;
        if(!province){
            if(jsonCallback){
                return ctx.body = jsonCallback+'('+JSON.stringify({
                    code:400,
                    message:"错误的请求"
                })+')';
            }else{
                return ctx.body = {
                    code:400,
                    message:"错误的请求"
                }
            }
            
        }
        let result = await address.city(province);
        if(jsonCallback){
            return ctx.body = jsonCallback+'('+JSON.stringify({
                code:200,
                result:result
            } )+')';
        }else{
            ctx.body = {
                code:200,
                result:result
            } 
        }
    }catch(err){
        console.log(err.message);
        if(jsonCallback){
            return ctx.body = jsonCallback+'('+JSON.stringify({
                code:500,
                message:err.message,
                descript:'出现错误了呢'
            })+')';
        }else{
            ctx.body = {
                code:500,
                message:err.message,
                descript:'出现错误了呢'
            };
        }
        
    }
});

//区域数据
router.get('/area/:city',async ctx=>{
    let jsonCallback = ctx.query.jsonCallback;//json的callback回调
    try{
        let city = ctx.params.city;
        if(!city){
            if(jsonCallback){
                return ctx.body = jsonCallback+'('+JSON.stringify({
                    code:400,
                    message:"错误的请求"
                })+')';
            }else{
                return ctx.body = {
                    code:400,
                    message:"错误的请求"
                }
            }
            
        }
        let result = await address.area(city);
        if(jsonCallback){
            return ctx.body = jsonCallback+'('+JSON.stringify({
                code:200,
                result:result
            } )+')';
        }else{
            ctx.body = {
                code:200,
                result:result
            } 
        }
    }catch(err){
        console.log(err.message);
        if(jsonCallback){
            return ctx.body = jsonCallback+'('+JSON.stringify({
                code:500,
                message:err.message,
                descript:'出现错误了呢'
            })+')';
        }else{
            ctx.body = {
                code:500,
                message:err.message,
                descript:'出现错误了呢'
            };
        }
        
    }
});


//街道数据
router.get('/street/:area',async ctx=>{
    let jsonCallback = ctx.query.jsonCallback;//json的callback回调
    try{
        let area = ctx.params.area;
        if(!area){
            if(jsonCallback){
                return ctx.body = jsonCallback+'('+JSON.stringify({
                    code:400,
                    message:"错误的请求"
                })+')';
            }else{
                return ctx.body = {
                    code:400,
                    message:"错误的请求"
                }
            }
            
        }
        let result = await address.street(area);
        if(jsonCallback){
            return ctx.body = jsonCallback+'('+JSON.stringify({
                code:200,
                result:result
            } )+')';
        }else{
            ctx.body = {
                code:200,
                result:result
            } 
        }
    }catch(err){
        console.log(err.message);
        if(jsonCallback){
            return ctx.body = jsonCallback+'('+JSON.stringify({
                code:500,
                message:err.message,
                descript:'出现错误了呢'
            })+')';
        }else{
            ctx.body = {
                code:500,
                message:err.message,
                descript:'出现错误了呢'
            };
        }
        
    }
});


module.exports = router;