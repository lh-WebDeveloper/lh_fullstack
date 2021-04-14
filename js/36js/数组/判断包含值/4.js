// array.findeIndex(callback[,thisArg])
// 返回数组中满足条件的第一个元素的下标，如果没有找到，返回-1]
var arr=[1,2,3,4];
var result = arr.findIndex(item =>{
    return item > 4
});
console.log(result);