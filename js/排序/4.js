// 插入排序优化(二分查找)
function def(arr){
    let length=arr.length;
    if(length<= 1){
        return
    }
    for(let i=1;i<length;i++){
        // 定义二分查找指针 在有序数组内查找
        let left=0,right=i-1,key=arr[i];
        let index;
        while(right>=left){
            let middle=Math.floor((left+right)/2);
            if(key <arr[middle]){
                right=middle-1;
            }else{
                left=middle+1;
            }
            index=middle
        }
        console.log(left,index)
        for(let j=i-1;j>=left;j--){
            arr[j+1]=arr[j]
        }
        arr[left]=key;
    }
}
let arr=[2,5,7,1,34,23,22,31]
def(arr)
console.log(arr)
