const arr = [1, [2, [3, [4, [5]]]]];

// 1. flat自动展开
let arr1 = arr.flat(Infinity);
console.log(arr1); // [ 1, 2, 3, 4, 5 ]
