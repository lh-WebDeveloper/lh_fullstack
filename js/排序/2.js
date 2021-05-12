// 选择排序
function def(arr){
    if(arr.length<=1)
        return;
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j])
            min=j;
        }
        [arr[min],arr[i]]=[arr[i],arr[min]]
    }
}
let arr=[2,34,5,56,17,20,31,29];
def(arr);
console.log(arr)