//冒泡排序
function def(arr){
    let sp=false
    for( i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-i-1;j++){
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
                sp=true;
            }
        }
        if(sp=true){
            return 
        }
    }
}
let  arr=[2,34,5,56,17,20,31,29];
def(arr)
console.log(arr);