// var containsDuplicate = function(nums) {
//     flag =false
//     for(var i=0;i<nums.length;i++){
//         for(var j=j+1;j<nums.length;j++){
//             if(nums[i]==nums[j]){
//                 flag=true
//             }
//         }
//     }
//     return flag
// };
// console.log(containsDuplicate(1,2,3,4,4))



var containsDuplicate = function(nums) {
    flag = false
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i] == nums[j]){
                flag = true
            }
        }
    }
    return flag
};
console.log(containsDuplicate(1,2,3,4,4))
