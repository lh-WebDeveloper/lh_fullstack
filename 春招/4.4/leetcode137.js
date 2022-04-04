//方法1 遍历数组 判断元素分别头尾查询的index是否相等

var singleNumber = function(nums){
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])===nums.lastIndexOf(nums[i])){
            return nums[i]
        }
    }
}
console.log(singleNumber(nums = [0,1,0,1,0,1,99]))

// 方法二 把数组进行排序，每次判断删除重复的
var singleNumber = function(nums){
    nums.sort((a,b)=>a-b)
    while(nums.length>1){
        if(nums[0]===nums[1] && nums[1]===nums[2]){
            nums.shift();
            nums.shift();
            nums.shift();
        }else{
            return nums[0]
        }
    }
    return nums[0]
}
console.log(singleNumber(nums = [0,1,0,1,0,1,99]))