const arr = [1, [2, [3, [4, [5]]]]];

// 将arr变成字符串
let str = JSON.stringify(arr);
console.log(str); // [1,[2,[3,[4,[5]]]]] String

// 2. replace + split
// 使用正则去除str里面的[]两个符号
let arr2 = str.replace(/(\[|\])/g, '');
console.log(arr2); // 1,2,3,4,5
// 以，为间隔生成数组
arr2 = arr2.split(',');
console.log(arr2); //[ '1', '2', '3', '4', '5' ]

// 整合成一行代码如下
let arr3 = str.replace(/(\[|\])/g, '').split(',');
console.log(arr3);// [ '1', '2', '3', '4', '5' ]
