console.log(0/0); //NaN
console.log(-0/0);//NaN

console.log(5/0); //Infinity
console.log(5/-0);//-Infinity

console.log(NaN/3);//NaN
console.log(NaN ==NaN)//false

console.log(isNaN(NaN)); //true
console.log(isNaN(10)); //false
console.log(isNaN("10"));//false
console.log(isNaN("blue"));//true
console.log(isNaN("true"));//true

let num1 = Number("Hello world");//NaN
let num2 = Number("");//0
let num3 = Number("0000011");//11
let num4 = Number(true);//1