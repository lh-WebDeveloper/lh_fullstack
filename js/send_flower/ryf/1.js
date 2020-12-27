// 函数 对象
// js 类型
const arr=[1,2,3];
console.log(typeof arr);// object
const obj ={a:1};
obj.b=2;
arr.push(4);
console.log(arr);
const a="hello";// 声明变量 undefined 类型未定义
console.log(typeof a);
//a = 1;
//console.log(typeof a);
function Cart(){
    this.type="择耳";
}
Cart.prototype.sayHello =function(){
    console.log('喵');
}