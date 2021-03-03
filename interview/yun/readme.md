# 当你有了一台服务器后,看到页面前发生了什么？
# 当你有了一台服务器后,可以干什么
docker 一台物理主机 虚拟出来很多的云服务器
- ip
    浏览器域名或IP访问,https
    centos 7.6？ web 服务器
    Nginx 是一个高性能的HTPP和反向代理的web服务器
- putty 远程 SSH 链接 华为云的服务器
    root password
- web 服务 Ngnix 安装
 安装nginx的依赖
     yum -y install gcc  gcc-c++ autoconf pcre-devel make automake
     yum -y install wget httpd-tools vim
     yum list | grep ngnix
     yum install ngnix
     ngnix -v 
     ngnix 启动服务器 
     ngnix -s stop 

- ngnix 静态网页 http服务 html
    动态 node 
    1. centos node 
        - nginx wget  taobao mirrors .tar.tz linux 压缩包
        - 解压 tar -xvf node-v12.16.1-linux-x64.tar.gz
        - /usr/local/bin/node/bin node npm npx
        - 全局命令  配置软链接
    2. Koa code 
    ```
    const express = require('express');
    const Koa = require('koa'); //引入最好的node 开发框架
    const app = express();
    const app = new Koa();
    //中间件 middlewares 函数
    app.get('/',(req,res)=>{//express
        res.send('hello world')
    })
    //这一次http服务流程 请求和响应的过程
    //app.use 启动一个中间件
    app.use(async ctx => {//ctx express ctx  = req + res
            ctx.body = 'Hello World';
    })
    app.listen(3000);

    ```

    node app.js 命令行一直霸占在那
    3000 任何人发出请求 ctx 
    后台运行