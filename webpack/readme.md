# 进阶的开发方式

- parcel
- parcel 的哥哥 webpack
- webpack 是面试的重灾区
    工作流程,没有webpack，何以代码?
    1. build 打包为上线 dist/ dev src/ 开发阶段
        build 打包 编译 .c .o  java
        "build":webpack --mode=development
    2.  入口文件 index.html

main.js -> bundle.js
js es6|7|8|9|10 编译一下
stylus css 编译一下  npm run build 编译一下

写的代码 build 用户执行的代码
webpack 来执行代码生产工艺
webpack --mode=development
webpack.config.js