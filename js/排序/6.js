// 快排
const de=(arr,low,high)=>{
    let pi=arr[low];
    let index=low;
    for(let i=low+1;i<=high;i++){
        if(arr[i]<pi){
            index++
            [arr[i],arr[index]]=[arr[index],arr[i]]
        }
    }
    [arr[low],arr[index]]=[arr[index],arr[low]]
    return index
}
const def=(arr,low=0,high=arr.length-1)=>{
    const length=arr.length
    if(length<=1){
        return
    }
    if(low<high){
    let pi=de(arr,low,high)
    def(arr,low,pi-1)
    def(arr,pi+1,high)
    }
}
let arr=[2,5,7,1,34,23,22,31]
def(arr)
console.log(arr)