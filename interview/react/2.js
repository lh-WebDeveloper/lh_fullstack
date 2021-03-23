//简单数据类型 只能被替换 不能被修改
//var str='I am hero';
//len(str) 
// console.log(str.toUpperCase());
// console.log(str);
//immutable
// let str ='I am hero';
// str = str.toUpperCase();


const a= 5;
function A(b) {
    //是否会产生副作用
    ///a++;
    //不纯
    return a+b;
}
A(5);