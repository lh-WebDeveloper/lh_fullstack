var missingNumber = function(nums) {
//      // 对数组进行排序
//   return nums.sort((a, b) => a - b).reduce((arr, item, index) => {
//     // 判断当index和当前遍历到的值相同的时候，不对arr插入值
//     if (item !== index) {
//       // 只有不同的时候，才会往arr中塞值
//       arr.push(index);
//     }
//     return arr;
//     // 只会有一个数字，所以只取第一个数字
//   }, [])[0];
        let n = nums.length, 
        sum = n * (n + 1) / 2;
        let currentSum = nums.reduce((a,b) => a + b);
        return sum - currentSum 

};
let nums=[0,1,3]
console.log(missingNumber(nums))