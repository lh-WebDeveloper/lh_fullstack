var containsNearbyDuplicate = function(nums, k) {
    // 两层循环遍历,依据题目所给条件进行判断
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j] && Math.abs(i-j)<=k){
                return true
            }
        }
    }
    return false
};
nums = [1,2,3,1], k = 3
console.log(containsNearbyDuplicate(nums,k))