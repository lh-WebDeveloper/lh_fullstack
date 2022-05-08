//暴力法
var findLength = function(nums1, nums2) {
    let m=nums1.length;
    let n=nums2.length;
    let res=0;
    if(!m && !n){
        return res
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(nums1[i] == nums2[j]){ //相同项
                let maxLen= 1
                while( i+maxLen < m && j+maxLen < n &&nums1[i+maxLen] == nums2[j+maxLen] ){ // 下一项也相同
                    maxLen++;
                }
                res=Math.max(maxLen,res) //取最大
            }
        }
    }
    return res
};
nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
console.log(findLength(nums1,nums2))


// 动态规化
var findLength = (nums1, nums2) => {
    const m = A.length;
    const n = B.length;
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1).fill(0);
    }                                   // 初始化二维数组dp，每一项都是0
    let res = 0;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (A[i - 1] == B[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        }
        res = Math.max(dp[i][j], res);
      }
    }
    return res;
  }
