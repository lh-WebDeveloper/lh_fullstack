var longestConsecutive = function(nums) {
    nums.sort((a,b)=>a-b) // 排序
    if(nums.length===0){
        return 0
    }
    let max=0;
    let count=1;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == nums[i+1]) continue
        if(nums[i] + 1 == nums[i+1]){
            count++
        }else{
            count=1
        }
        max=Math.max(max,count)
    }
    return max
};
nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums))