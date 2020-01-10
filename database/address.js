const pool = require('./MysqlPool');
function getConnection(){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,conn)=>{
            if(err){
                reject(err);
            }else{
                resolve(conn);
            }
        })
    })    
}

function aquery(conn,sql,value){
    return new Promise((resolve,reject)=>{
        conn.query(sql,value,function(err,result){
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })   
}

async function getProvince(){
    let [err,conn] = await getConnection().then(conn=>[null,conn]).catch(err=>[err,null]); 
    if(err){
        console.log('出现错误');
        console.log(err);
        return new Promise((resolve,reject)=>{
            reject(err);
        });
    }
    let sql = 'select * from bs_province';
    let value = null;
    let [error,result] = await aquery(conn,sql,value).then(result=>[null,result]).catch(error=>[error,null]);
    return new Promise((resolve,reject)=>{
        if(error){
            conn.release();
            reject(error);
        }else{
            conn.release();
            resolve(result);
        }
    });
}


function getCity(province){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,conn)=>{
            if(err){
                return reject(err);
            }
            let sql = 'select * from bs_city where PROVINCE_CODE = ?';
            let value = [province];
            conn.query(sql,value,function(err,result){
                if(err){
                    conn.release();
                    return reject(err);
                }
                conn.release();
                resolve(result);
            })

        })

    })
}

function getArea(city){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,conn)=>{
            if(err){
                return reject(err);
            }
            let sql = 'select * from bs_area where city_code = ?';
            let value = [city];
            conn.query(sql,value,function(err,result){
                if(err){
                    conn.release();
                    return reject(err);
                }
                conn.release();
                resolve(result);
            })

        })

    })
}

function getStreet(area){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,conn)=>{
            if(err){
                return reject(err);
            }
            let sql = 'select * from bs_street where area_code = ?';
            let value = [area];
            conn.query(sql,value,function(err,result){
                if(err){
                    conn.release();
                    return reject(err);
                }
                conn.release();
                resolve(result);
            })

        })

    })
}

module.exports.getProvince = getProvince;
module.exports.getCity = getCity;
module.exports.getArea = getArea;
module.exports.getStreet = getStreet;