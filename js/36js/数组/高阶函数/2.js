//reduce
let nums = [7, 2, 3];
// 多个数的加和
let newNums = nums.reduce(function(preSum,curVal,array) {
  return preSum + curVal; 
}, 0);
console.log(newNums);//6