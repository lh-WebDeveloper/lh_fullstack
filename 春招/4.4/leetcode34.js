// 方法1 数组的nums.indexOf和lastIndexOf方法
// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
// lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
var searchRange = function(nums, target) {
    if(nums.length<=0){
        return [-1,-1];
    }
    let first=nums.indexOf(target);
    let last=nums.lastIndexOf(target);
    return [first,last]
};
console.log(searchRange(nums = [5,7,7,8,8,10], target = 8));



// 方法2 暴力解法
// 如果数组中第一个元素大于target，返回[-1,-1]。
// 如果最后一个元素小于target，返回[-1,-1]。
// 否则遍历数组：从前往后遍历数组，target 与 nums[i]第一次相等时，
// 结果数组（result[]，有两个元素，分别表示第一次出现的位置和最后一次出现的位置）中两个元素都赋值为第一次出现下标；继续往后遍历，
// 如果，target 与 nums[i]还是相等，则结果数组中第二个元素（result[]）等于当时的下标，否则退出循环。

var searchRange = function(nums,target){
    if(nums.length<=0){
        return [-1,-1]
    }
    let result = [-1,-1];//保存结果，初始化为[-1,-1]，表示不存在
    let i = 0;
    while(i < nums.length){ //遍历
        if(target === nums[i]){  //如果相等
            if(result[0] === -1){//第一次相等时，数组中两个元素都赋值为第一次出现下标
                result[0] = i;
                result[1] = i;
            }
            else{ //不是第一次出现时，数组第二个元素赋值为新的下标
                result[1] = i;
            }
        }
        if(nums[i] > target){ //如果大于目标值，退出循环
            break;
        }
        i++;
    }
    return result;
}
console.log(searchRange(nums = [5,7,7,8,8,10], target = 8));


