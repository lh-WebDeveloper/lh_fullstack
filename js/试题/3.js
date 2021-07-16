//寻找n个数中的最大值
export class Solution{
    maxNum(nums){
        return Math.max.apply(this, nums);//使用apply函数
    }
}
nums=[1,2,3,4,5]
console.log(nums)