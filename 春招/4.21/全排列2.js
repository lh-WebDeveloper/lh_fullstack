var permuteUnique = function(nums) {
    nums.sort((a,b)=>a-b) //先排序，否则无法通过
    let result=[];
    let path=[];
    let flag= new Array(nums.length).fill(false) //设置一个数组看元素是否被使用过
    function getAll(index,path){
        if(path.length == nums.length){
            result.push([...path])
            return
        }
        for(let i=0;i<nums.length;i++){
            if( i>0 && nums[i] == nums[i-1] && !flag[i-1]) continue // 如果 i >0 且当前元素与上一元素相同，且上一元素已被使用
            if (flag[i]) continue
            path.push(nums[i])
            flag[i] = true
            getAll(index+1,path)
            path.pop()
            flag[i] = false
        }
    }
    getAll(0,path)
    return result
};
nums = [1,2,3]
console.log(permuteUnique(nums))




var permuteUnique = function (nums) {
    const map = new Map(), result = []
    function backtrack(combinations, path, result) {
        if (path.length === nums.length) {
            result.push(path.concat())
            return
        }
        const selected  = []
        for (let i = 0; i < combinations.length; i++) {
            if (!selected.includes(combinations[i])) {
                selected.push(combinations[i])
                path.push(combinations[i])
                backtrack(combinations.filter((item, index) => index != i), path, result)
                path.pop()
            }
        }
    }
    backtrack(nums, [], result)
    return result
};