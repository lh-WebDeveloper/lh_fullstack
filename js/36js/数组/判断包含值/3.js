// array.find(callback[,thisArg])
// 返回数组中满足条件的第一个元素的值，如果没有，返回undefined
var arr=[1,2,3,4];
var result = arr.find(item =>{
    return item > 5
});
console.log(result);