var removeElement = function(nums, val) {
    let left=0;
    for(let right=0;right<nums.length;right++){
        if(nums[right] !==val){
            nums[left]=nums[right];
            left++;
        }
    }
    return left;
    // let ans=0;
    // for(const num of nums){
    //     if(num!==val){
    //         ans[num]=nums
    //         ans++;
    //     }
    // }
    // return ans
};
let arr = [3,2,2,3], val = 3
console.log(removeElement(arr,val))