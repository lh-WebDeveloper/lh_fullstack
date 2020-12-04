const AipOcrClient = require('baidu-aip-sdk').ocr;
// 内置模块 fileSystem
const fs =require('fs');
const image =fs.readFileSync("t2.jpg").toString("base64");
//1. 读写文件 I/O 从硬盘读入内存中,
const APP_ID ="23078079";
const API_KEY ="O8p7u5Q1jkFuxTzZT3YRoZX8"
const SECRET_KEY ="4xGl9lo5wGD3ogd3z6LPnS7XCgl2YZL4nn";

const client = new AipOcrClient(APP_ID,API_KEY,SECRET_KEY);
const options ={};
options["multi_detect"]="true";

client
    // .licensePlate
    .licensePlate(image,options)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })