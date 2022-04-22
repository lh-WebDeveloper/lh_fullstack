var combinationSum = function(candidates, target) {
    // 1、当前总和等于目标 将结果压入结果集 返回
    // 2、当前总和大于目标 直接返回
    let result=[];
    // 三个参数（index 开始时的序列，当前数组，当前数组总和）
    function backStack(sum, index, temp){
        if(sum===target){
            result.push(temp.concat())
        }
        if(sum > target){
            return
        }
        for(let i=index;i<candidates.length;i++){
            temp.push(candidates[i])
            backStack(sum + candidates[i], i, temp)
            temp.pop()
        }
    }
    backStack(0,0,[])
    return result
};
console.log(combinationSum([2, 3, 6, 7], 7));