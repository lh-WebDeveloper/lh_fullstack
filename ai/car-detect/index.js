console.log('AI 来了,帅')
// node 引入模 块的关键字
// 图像识别
const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;
// 内置模块 fileSystem
const fs =require('fs');
//1. 读写文件 I/O 从硬盘读入内存中,
const APP_ID ="23077971";
const API_KEY ="HRy32jpaD3DZZl2E7rQOzcL1"
const SECRET_KEY ="EbyucnKZpxEUT6rtw0uhhGt8o53zi7bg";

const client =new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
// const fs = require('fs');
const image = fs.readFileSync("t1.jpg").toString("base64");

client
      .carDetect(image)
      .then(function(result){
          console.log(result);
      })
      .catch(function(err){
          console.log(err)
      })