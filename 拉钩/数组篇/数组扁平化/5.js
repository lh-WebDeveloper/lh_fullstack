//调用ES6中的flat
var arr=[1,[2,[3,4]]];
function flatten(arr){
    return arr.flat(Infinity);
}
console.log(flatten(arr));