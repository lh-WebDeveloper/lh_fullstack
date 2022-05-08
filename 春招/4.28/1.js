function countPrimes( n ) {
    // write code here
    // const result=[2]
    var result=1;
    var flag=true
    for(let i=3;i<n;i++){
        if( i%2 ==0){
            continue
        }
        for(let j=i-1;j>1;j--){
            if(i%j == 0){
                flag=false
                break
            }
        }
        if(flag){
            result+=1
        }
        flag=true
    }
    return result
}
console.log(countPrimes(1000))