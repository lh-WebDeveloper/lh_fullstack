var topKFrequent = function(nums, k) {
    const map = new Map()
    // 获得统计后的map
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1);
            // console.log(map)
        }else{
            map.set(nums[i],map.get(nums[i])+1)
            console.log(map)
        }
    }

    // 将map转换为二维数组，对二维数组的第二个值进行排序
    let arr=[...map].sort((a,b)=>b[1]-a[1])
    // 将前k个元素输出
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(arr[i][0]);
    }
    return res
};
nums = [1,1,1,2,2,3,4,4,4,4,4], k = 2
console.log(topKFrequent(nums,k))