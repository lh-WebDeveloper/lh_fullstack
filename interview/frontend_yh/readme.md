- CDN 核心理解 一个是缓存 一个是回溯
- CDN + Webpack 实战中是常用的 
- cookie:字符串 文本 请求头中带上 发送
    Expires
    Name=Value
    Path
    Domain 
    Size
    HttpOnly
    Security
页面请求次数,链接数 -> 带宽费
传输速度、费用

- HTML5 里为何要有localStorage ?
- 前端项目如何部署到CDN ?
    大厂是一定要做CDN的,一键发布

- 性能优化的知识脉络是怎么样的?
    当用户访问过一次的时候
    1. 网络端 CDN
    2. Gzip -> Tree shaking

    当用户访问过一次,前端比较熟悉
    3. 存储层
        浏览器的缓存
        本地存储
    
    4. 服务器端渲染 ssr  首屏推荐使用

    5. 渲染层
    
    6. event loop事件循环机制

- CDN 优化的细节
    域名的选取
    www.taobao.com 业务服务器 
    g.alicdn.com CDN服务器

sideEffects
webpack 不会把lodash-es 所有的代码 内容 打包进来,只是打包了你用到的两个模块,
这是sideEffect

useExports是通过Terser来检测未使用的部分代码 是否有副作用