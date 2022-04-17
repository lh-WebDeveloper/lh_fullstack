var threeSum = function(nums) {
    nums.sort((a,b)=>a-b); //先排序
    let result=[]
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>0) break // 如果nums[i]大于0,后面的也大于0
        if(i>0 && nums[i]==nums[i-1]) continue // 去重
        // 定义左右指针
        let left=i+1;
        let right=nums.length-1
        while(left <right){
            let sum=nums[i]+ nums[left]+ nums[right]
            if(sum > 0){
                right--;
            }else if(sum <0){
                left++;
            }else{
                result.push([nums[i],nums[left],nums[right]])
                while(left < right && nums[left] == nums[left+1]){ //去重
                    left++
                }
                while(left < right && nums[right] == nums[right-1]){ //去重
                    right--
                }
                left++;
                right--;
            }
        }
    }
    return result
}
nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))