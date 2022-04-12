var maxProduct = function(nums) {
    let res = nums[0], max = nums[0], min = nums[0];
    for (let i = 1; i < nums.length; i++) {
      curmax = Math.max(max * nums[i], nums[i], min * nums[i])
      curmin = Math.min(min * nums[i], nums[i], max * nums[i])
      max = curmax
      min = curmin
  
      res = Math.max(max, res)
    }
    return res
}
let nums = [2,3,-2,4];
console.log(maxProduct(nums))

