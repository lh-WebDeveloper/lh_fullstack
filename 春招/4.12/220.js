var containsNearbyAlmostDuplicate = function(nums, k, t) {
    // 直接两层循环遍历 然后根据要求进行判断，满足返回true,不满足返回false
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j])<=t && Math.abs(i-j)<=k){
                return true
            }
        }
    }
    return false
};
nums = [1,0,1,1], k = 1, t = 2
console.log(containsNearbyAlmostDuplicate(nums,k,t))