var judgeSquareSum = function(c) {
    // let left=0;
    // Math.sqrt() 函数返回一个数的平方根，
    // Math.floor() 返回小于或等于一个给定数字的最大整数。
    // let right=Math.floor(Math.sqrt(c))
    // while(left < right){
    //     result= left* left+right*right;
    //     if(result<c){
    //         left++
    //     }else if(result>c){
    //         right--
    //     }else{
    //         return true
    //     }
    // }
    // return false

    // 暴力法
    for(let i=0;i*i<=c;i++){
        if(Math.sqrt(c-i*i) % 1 ==0){
            return true
        }
    }
    return false
};
console.log(judgeSquareSum(23))