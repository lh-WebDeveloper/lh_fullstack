function flatten(arr){
    return arr.toString().split(',');
}
var arr=[1,2,[3,4,[5,6]]];
console.log(flatten(arr));// [ '1', '2', '3', '4', '5', '6' ]