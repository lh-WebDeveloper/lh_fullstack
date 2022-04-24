var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b) //去重排序
    const result=[];
    const path=[];
    function backStack(sum,index){
        if(sum === target){
            result.push(path.concat())
        }
        if(sum > target){
            return
        }
        for(let i=index;i<candidates.length;i++){
             //同一层中，重复的值不再调用
            if( i > index && candidates[i] == candidates[i-1]) continue
            path.push(candidates[i])
            sum+=candidates[i]
            backStack(sum,i+1)
            //下一层，起始值去掉当前值
            path.pop()
            sum-=candidates[i]
        }
    }
    backStack(0,0)
    return result
};
candidates = [10,1,2,7,6,1,5], target = 8
console.log(combinationSum2(candidates,target))