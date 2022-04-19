// 爬楼梯 动态规化
function climb(n){
    if(n===1){
        return 1
    }
    const result=[];
    result[1]=1;
    result[2]=2;
    for(let i=3;i<n;i++){
        result[i]=result[i-1]+result[i-2]
    }
    return result[n]
}

console.log(climb(3))