// 数据获取加上处理?
const address = require('../database/address');

function province(){
    return new Promise(async (resolve,reject)=>{
        try{
            let result =await address.getProvince();
            resolve(result);
        }catch(err){
            reject(err);
        }
        
    });
}

function city(province){
    return new Promise(async (resolve,reject)=>{
        try{
            let result =await address.getCity(province);
            resolve(result);
        }catch(err){
            reject(err);
        }
    });
}

function area(city){
    return new Promise(async (resolve,reject)=>{
        try{
            let result =await address.getArea(city);
            resolve(result);
        }catch(err){
            reject(err);
        }
    });
}

function street(area){
    return new Promise(async (resolve,reject)=>{
        try{
            let result =await address.getStreet(area);
            resolve(result);
        }catch(err){
            reject(err);
        }
    });
}

module.exports.province = province;

module.exports.city = city;

module.exports.area = area;

module.exports.street = street;