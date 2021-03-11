//split 和tostring 共同处理
var arr=[1,[2,[3,4]]];
function flatten(arr){
    return arr.toString().split(',');
}
console.log(flatten(arr));