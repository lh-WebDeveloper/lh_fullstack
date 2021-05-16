// 计数排序
const def=arr=>{
    const length=arr.length;
    if(length<=1){
        return
    }
    let count=new Array(Math.max(...arr)+1).fill(0)
    for(let i=0;i<length;i++){
        count[arr[i]]++;
    }
    for(let i=1;i<count.length;i++){
        count[i]+=count[i-1]
    }
    let output=new Array(length);
    for(let i=length-1;i>=0;i--){
        output[count[arr[i]]-1]=arr[i]
        count[arr[i]]--
    }
    return output
}
let arr=[2,5,7,1,34,23,22,31]
newArr=def(arr)
console.log(newArr)