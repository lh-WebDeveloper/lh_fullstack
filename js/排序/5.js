// 希尔排序
// function def(arr) {
//     var len = arr.length,
//         temp,
//         gap = 1;
//     while(gap < len/3) {          //动态定义间隔序列
//         gap =gap*3+1;
//     }
//     for (gap; gap > 0; gap = Math.floor(gap/3)) {
//         for (var i = gap; i < len; i++) {
//             temp = arr[i];
//             for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
//                 arr[j+gap] = arr[j];
//             }
//             arr[j+gap] = temp;
//         }
//     }
//     return arr;
// }
// let arr=[2,5,7,1,34,23,22,31]
// def(arr)
// console.log(arr)


const def=arr=>{
    const length=arr.length;
    if(length<=1) return;
    let interval=parseInt(length/2);
    while(interval>=1){
            for(let i=interval;i<length;i++){
                let temp=arr[i];
                let j=i;
                while(arr[j-interval]>temp && j>=interval){
                    arr[j]=arr[j-interval]
                    j-=interval
                }
                arr[j]=temp
            }
            interval=parseInt(interval/2);
        }
    }
let arr=[2,5,7,1,34,23,22,31]
def(arr)
console.log(arr)
