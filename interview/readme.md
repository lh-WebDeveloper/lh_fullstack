# 把面试题当成高考题
1. 以题目来检验下当前js之所学 推动之
2. 衡水一中  清北方法论
3. 打卡 课后做的任何事情 
     能力增长点
     JS能力

- null 和 undefined 的区别是什么?
    Object.prototype._proto_==null

    Undefined 意义是类型,当一个声明了一个变未初始化时,得到的是undefined
    1. 箭头函数和普通函数不一样
        es5时代的arguments 有用的
        不只是遍历,也被干掉了arguments
        ()=>{}function(){}都可以省
        arguments  但是es6里提供了...rest 运算符
        function(){}
    2. Object的原型对象
    new Object()
    Object(函数).prototype
    父(原型)对象
    Object(函数).prototype._proto_
    为什么? 到顶了, 不应该有原型
    null 此处没有对象, 不该有值
    跟禅宗一样,充满着智慧

    - 选择元素可以通过标签、id 、选择器() 、类名、子元素(),
        任何元素都有这些方法, 不仅限document