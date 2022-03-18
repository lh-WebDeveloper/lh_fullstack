var maxSubArray = function(nums) {
    let res=nums[0];
    let dp=[nums[0]];
    for(let i=0;i<nums.length;i++){
        if(dp[i-1]>0){
            dp[i]=nums[i]+dp[i-1]
        }else{
            dp[i]=nums[i]
        }
        res=Math.max(dp[i],res)
    }
    return res;
};
let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))