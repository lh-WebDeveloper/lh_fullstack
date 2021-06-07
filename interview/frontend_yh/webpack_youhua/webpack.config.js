const path=require('path');
// js 压缩,webpack 4.0 手动安装,webpack 5.0 内置
const TerserPlugin=require('terser-webpack-plugin');
const MiniCssExtractPlugin=require('min-css-extract-plugins');
const HtmlWebpackPlugin=require('html-webpack-plugin');

modules.exports={
    mode:development,
    entry:{
        index:'./src/index.js',
        page:'./src/page.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js',
        chunkFilename:'[name].[hash:8].js'//指定分离出来的代码 文件的名称
    },
    optimization:{
        minimize:true,
        useExport:true,
        sideEffects:true,
        splitChunks:{
            cacheGroups:{
                vendor:{
                    chunks:'initial',
                    test:path.resolve(__dirname,'node_modules'),
                    name:'vendor',
                    enforce:true
                }
            }
        }
    }
}