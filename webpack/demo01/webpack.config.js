const { Module } = require("webpack");

//与parcel的不同, 配置繁琐
//npm run build webpack --mode=development
//一定会去根目录下找到 webpack.config.js 文件
//module node 模块化 common.js
//import export es6 export default
module.exports = {
    entry: './main.js',//入口
    output: {//出口
      filename: 'main.js'
    }
}
  