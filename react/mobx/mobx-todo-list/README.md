- url 在浏览器上输入后，发生了什么，越详细越好
- 要在react 项目中完成article数据的展示 你怎么设计 越详细越好
    article model mongodb mysql
    Article 组件 
    1. Storage
    2. API 前后端
    3. 组件MVVM

1. URL 设计
    /articles
    /articles/:id
2. react-router-dom
    router 配置 前端路由SPA  Single Page Application
3. mobx 数据管理
    provider Store 做一个分支 Article
    mobx observerable @action getArticles getArticleById
4. API
    后端URI 在哪里？
5. Article 相关组件 @observer store
    componentDidMount 

路由有多个模块
/users   /articles  /goods
数据状态收到中央 什么状态都放在一个Store 实例里 乱
仓库只能有一个
<Provider store={store}>
</Provider>
多模块 

1. 前端启动路由 
<App/> 外面包一层 HashRouter HistoryRouter SPA
:3000/#/     :3000/   history
/article/:id
:3000/#/article/dfdf121 -> Router match 匹配到了

component Article
this.props.



- BlogPost CommentList 
    相同点,区别点
    改造下写法?

- Post Comment 初始化相似的 数组 render map
    给初值
    只写一个组件？ 可以 HOC 高阶组件 代码的复用
    返回值是组件的函数  参数
    (组件data,getPosts getComments) =><Common> 值

学会了高阶组件,就可以学习react源码
@inject 高阶组件
class 
return connect({props,action})(Component)

- 当数据发生变化时,代码会重新执行一次 n {n}
但是子组件 数据没有发生变化,也会执行 性能能提升吗?
这是一个通用的问题 HOC 


热更新
虚拟DOM
子组件 缺点
React.Memo


