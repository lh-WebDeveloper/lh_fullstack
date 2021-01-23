/* if(true){
    var name = 'li'
    console.log(name);//li
}
console.log(name);//li

if(true){
    let age =26;
    console.log(age);//26
}
console.log(age);//age 未定义 

var name = 'li';
console.log(window.name);//li
let age = 26;
console.log(window.age);//undefined

*/
for(var i = 0; i < 5; ++i){
    setTimeout(()=>console.log(i),0)
}//5，5，5，5，5

for(let i = 0; i < 5; ++i){
    setTimeout(()=>console.log(i),0)
}//0，1，2，3，4
/*
 //name 会被提升
console.log(name)//undefined
var name = 'li'; 
//age 不会被提升
console.log(age)//age未定义
let age =26;
 */

/* for(var i = 0; i < 5; ++i){
     //循环逻辑
 }
console.log(i)//5 
for(let i = 0; i < 5; ++i){
    //循环逻辑
 }
console.log(i);//i没有定义 */