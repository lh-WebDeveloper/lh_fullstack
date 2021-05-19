# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

- react 全家桶,全面react hooks 函数化编程
- 服务器端采用 egg.js + ts + mysql 提供API服务
- 数据库的说明文件
    mysql mongodb 区别?
    mysql是关系型 mongodb是NoSQL 
    关系型业务适合mysql user post comment
    mongodb 微博 表是collection 集合json文件组成的 数据比较杂,短视频
    数据库连接 egg.js的config.js
    redis 内存数据库 KV 90%的数据是重复的
    内存中的
    文章列表 mysql2 -> 数据库 I/O开销
    第一次查, index_posts:[{},] ->reids  LRU  local Storage 
    
    后端程序和数据库是分离的,甚至在机器上是分离的
    mysql2 数据库驱动 model egg.js  配置插件

    
    koa/express 轻量级的node服务端开发框架
    egg.js企业级 更标准,对新手更友好,约定大于一切,看文档就好了。


    - app.ts 7001启动web服务
    - http访问由中间件打理
    路由器中间件 匹配到路由地址后,交给相应的controller
    http.createServer((req,res)=>{
        
    }) 
    - 校验表单数据serverice存储
        import Post model
    - 
        
    
