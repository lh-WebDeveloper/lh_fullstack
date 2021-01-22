性能优化 永远的大厂主题

- DOM是最贵的性能开销，没有之一

- 差点挂了
    10000次吗
    1. chrome tab 都会有一定的内存最高值
        10000条在边缘
    2. 内存消耗在哪里呢?
        document 性能开销
        JS 文档对象 JS 操作DOM
    
    两步
    1. 下载html,css 浏览器在渲染页面的第一步 
        - html DOM树 树的查询 c++
          tree 的结构
        - css 解析执行 基于DOM 树 生成css渲染树 selector
          属性构成 Render tree layout width height margin 
          padding postion
          遍历这棵渲染树,
          selector node css 
          attribute 节点上的数据

          js 极其好性能的家伙
          1. js跟java 比慢点  c/c++/java 内存级别的语言
             js php python 脚本语言
             应用场景 js 是目前唯一可以做前端的语言,
             node 后端, 移动端,
          2. js就是个第三者, 被浏览器逼出来
            DOM树 + css  渲染树 快速的把静态页面显示出来
            第一要务
            js 第三者 动态DOM ajax
            document.getElementById('') 巨大的开销
            js (语言世界) -> html + css DOM 树世界
            别的语言没有

          3. 分屏加载html 制高点