// 方法1 暴力法
var containsNearbyAlmostDuplicate = function(nums, k, t){
     // 遍历下标i
    for(let i=0;i<nums.length;i++){
        // 遍历下标j，j为i之后的所有下标
        for(let j=i+1;j<nums.length;j++){
            // 根据题意，查询是否存在满足条件的下标，有则返回true
            if(Math.abs(nums[i]-nums[j]) <= t && Math.abs(i - j) <= k ){
                return true
            }
        }
    }
     // 如果正常退出循环，表示没有找到下标，返回false
    return false
}