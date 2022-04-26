var maxSubArray = function(nums) {
    let sum=nums[0]; //记录一个当前连续子数组累加值 sum 默认值为数组第一项
    let max=nums[0]  //记录一个当前连续子数组最大值 max 默认值为数组第一项
    for(let i=1;i<nums.length;i++){
        if(sum < 0){
            sum=nums[i]
        }else{
            sum=sum+nums[i]
        }
        if(sum> max){
            max=sum
        }
    }
    return max
}
nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))


var maxSubArray = function(nums){
    let result=nums[0];
    let dp=[nums[0]];
    for(let i=0;i<nums.length;i++){
        if(dp[i-1] > 0){
            dp[i]=nums[i]+dp[i-1]
        }else{
            dp[i]=nums[i]
        }
        result=Math.max(dp[i],result)
    }
    return result
}
nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))

