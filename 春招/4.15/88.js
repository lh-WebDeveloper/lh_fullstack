var merge = function(nums1, m, nums2, n) {
    // 将nums2解构push进num1,然后进行排序
    nums1.splice(m)
    nums1.push(...nums2);
    nums1.sort((a,b)=>a-b)
};


var merge = function(nums1, m, nums2, n) {
    //  先判断 B 为空直接 return，A 为空则将 B shift 到 A 中
    //  将 B shift 填到 A 尾部的扩容区域，然后用 sort 排序
    if(!B.length || !n){
        return 
    }
    for(let i=m;i<m+n;i++){
        A[i] =B.shift()
    }
    A.sort((a,b)=>a-b)
}
