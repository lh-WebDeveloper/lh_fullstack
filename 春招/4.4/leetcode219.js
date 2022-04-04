// 方法1
var containsNearbyDuplicate = function(nums, k) {
	//外循环i从0开始循环到倒数第二个数
    for(let i = 0;i<nums.length-1;i++){
    	//内循环j从i+1开始循环到倒数第二个数
        for(let j = i+1; j<=nums.length-1;j++){
        	// nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
           if (nums[i] == nums[j] && j - i <= k) {
                return true
            }
        }
    }
    return false
};

// 方法2 
// 新建一个set集合，不断向set集合中添加和删除数据，注意判断条件
// 当i>k时，说明窗口长度到达了可以删除元素的长度，每次删除set集合中的第一个存进去元素(nums[i-k-1])
// 如果集合set中有当前元素，直接返回true
 var containsNearbyDuplicate = function(nums, k) {
	const set = new Set();
	const length = nums.length;
	for(let i = 0;i<length;i++){
		if(i > k){
			set.delete(nums[i-k-1])
		}
		if(set.has(nums[i])){
			return true;
		}
		set.add(nums[i])
	}
	return false;
};

// 方法3
// 使用到元素以其索引的话就使用map，
// 如果存在该元素并且当前i与元素的下标的差小于或等于k，
// 说明目前有存在重复的元素，return true,如果没有，则重新设置键值对为（该元素，索引）
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])&&(i-map.get(nums[i])<=k)){
            return true
        }else{
            map.set(nums[i],i)
        }

     }
     return false
};

