//对象的拷贝
let obj={a:1,b:{c:1}}
let obj2={...obj}
obj.a=2
console.log(obj)//{a:1,b:{c:1}}
obj.b.c=2
console.log(obj)//{a:1,b:{c:2}}
//数组的拷贝
let arr=[1,2,3];
let newArr=[arr];