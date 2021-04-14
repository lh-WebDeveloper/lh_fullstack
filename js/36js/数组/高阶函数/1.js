//map 
// 参数:接受两个参数，一个是回调函数，一个是回调函数的this值(可选)。
// 其中，回调函数被默认传入三个值，依次为当前元素、当前索引、整个数组。
// 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
// 对原来的数组没有影响

let nums = [1, 2, 3];
let obj = {val: 5};
let newNums = nums.map(function(item,index,array) {
  return item + index + array[index] + this.val; 
  //对第一个元素，1 + 0 + 1 + 5 = 7
  //对第二个元素，2 + 1 + 2 + 5 = 10
  //对第三个元素，3 + 2 + 3 + 5 = 13
}, obj);
console.log(newNums);//[7, 10, 13]