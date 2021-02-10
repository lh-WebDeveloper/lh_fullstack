/* function foo(){
    console.log(this.a);
}
var obj={
    a:2
};
foo.call(obj);//2

 */
function foo(){
    console.log(this.a);
}
var obj={
    a:2
};
var bar =function(){
    foo.call(obj);
};
bar();//2
setTimeout(bar,100);//2



function foo(something){
    console.log(this.a,something);
    return this.a+something;
}
var obj={
    a:2
};
var bar = function(){
    return foo.apply(obj,arguments);
};
var b=bar(3);// 2 3
console.log(b)// 5