let target={};
let source={a:{b:2}};
Object.assign(target,source);

console.log(target);//{a:{b:2}}
source.a.b=10;
console.log(source);//{a:{b:10}}
console.log(target);//{a:{b:10}}

//Object.assign
//不会拷贝对象的继承属性
//不会拷贝对象的不可枚举属性
//可以拷贝Symbol类型的属性