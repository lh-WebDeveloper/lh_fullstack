/* function foo(){
    console.log(this.a);
}
var obj={
    a:2,
    foo:foo
};
obj.foo();//2 */


/* function foo(){
    console.log(this.a);
}
var obj2={
    a:42,
    foo:foo
};
var obj1={
    a:3,
    obj2:obj2
};
obj1.obj2.foo();
 */


function foo(){
    console.log(this.a);
}
var obj={
    a:2,
    foo:foo
};
var bar = obj.foo;//函数别名
var a="oops,global";//a是全局对象的属性
bar();//"oops,global"