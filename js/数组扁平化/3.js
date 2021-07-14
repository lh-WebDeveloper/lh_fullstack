const arr = [1, [2, [3, [4, [5]]]]];

// 将arr变成字符串
let str = JSON.stringify(arr);
console.log(str); // [1,[2,[3,[4,[5]]]]] String

// 3. replace + JSON.parse
// 先去除所有的括号
let str2 = str.replace(/(\[|\])/g, '');
// 再加上左右括号
str2 = '[' + str2 + ']';
str2 = JSON.parse(str2); // 真正意义上实现的数组扁平化
console.log(str2);  // [ 1, 2, 3, 4, 5 ]  Array
