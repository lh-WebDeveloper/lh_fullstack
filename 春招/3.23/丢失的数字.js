var missingNumber = function(nums) {
    const length=nums.length;
    sum=((1+length)*length)/2
    for(let i=0;i<length;i++){
        sum-=nums[i]
    }
    return sum
};
let nums = [3,0,1]
console.log(missingNumber(nums))