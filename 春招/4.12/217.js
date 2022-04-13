var containsDuplicate = function(nums) {
    // nums.sort(); // 先给数组排序，然后遍历数组，比较前后是否相等
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]===nums[i+1])
    //     return true
    // }
    // return false
    

    //使用Set方法
    // const set=new Set(nums)
    // const newLen=[...set].length;
    // const newLen=[... new Set(nums)].length
    // if(newLen<nums.length){
    //     return true;
    // }
    // return false

    // 进一步优化
    const set=new Set(nums);
    return set.size<nums.length

};

let nums=[1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums))