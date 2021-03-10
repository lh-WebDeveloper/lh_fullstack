let obj1={a:1,b:[1,2,3]}
let str=JSON.stringify(obj1);
let obj2=JSON.parse(str);
console.log(obj2);//{ a: 1, b: [ 1, 2, 3 ] } 
obj1.a=2;
obj1.b.push(4);
console.log(obj1);//{ a: 2, b: [ 1, 2, 3, 4 ] }
console.log(obj2);//{ a: 1, b: [ 1, 2, 3 ] } 

