- es6 class 与 es5 构造函数+prototype 有什么关系?
    语法糖
- babel babel的使命就来了
    es6 class 不停的更新,每个版本,意义
    运行的环境就不一样
    babel 负责
    js的运行环境太复杂了,不是单纯的chrom,ie,360,QQ,支持不同的版本
    node 的不同版本,怎么办
    babel解决这些,怎么写出来的
- 一线公司问?
    请问es6 class 关键字实现除了刚刚讲的,有什么不一样的地方吗?
    - es6 class 构造函数在constructor
    只能被new,不能作为普通函数执行
        - 如果要你去设计的话? 怎么实现
    - Person.prototype 不可枚举
        Object.keys()//可枚举
        Object.getOwnpropertypeNames()可调用
    - es6 还有比es5实现丰富的地方
        es6里声明属性的时候有个更高级的方法
    - 手写一个babel 手写es6 class 的转义代码
        babel也是可以写出来的

1.babel js 转义 帮助es6 class ->es6 function