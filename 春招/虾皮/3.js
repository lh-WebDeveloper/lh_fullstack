// 给定整数数组和单个整数，返回整数数组中2个值相加为单个整数的值
function Sum(array,sum){
    let result=[]
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++){
            if(array[i]+array[j]===sum){
                result[0]=array[i];
                result[1]=array[j];
            }
        }
    }                                       
    return result
}
console.log(Sum([4,3,2,3,4],6))