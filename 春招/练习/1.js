// 知识点 计算二维数组每列的和，
// 并返回最大值和最大值得下标（下标从1开始计算）（题目就不描述了）
// 知识点 计算二维数组每列的和，并返回位置（题目就不描述了）
const arr =[[1001,992,0,233,6],[8,0,2018,0,2008],[36,18,0,1024,4]]
const fn =(arr)=>{
    // const newArr = [];
    // for(let i=0;i< arr[0].length;i++){
    //     newArr[i] = 0;
    //     for(let j=0; j<arr.length; j++){ 
    //         newArr[i] += arr[j][i];
    //     }
      
    // }
    // return newArr;
  const newArr = [];
   arr.forEach(sub => {
      sub.forEach((num, index) => {
         if(newArr[index]){
            newArr[index] += num;
         }else{
            newArr[index] = num;
         }
      });
   });
   console.log(newArr)
   return newArr;
}
const arr1 = fn(arr)
console.log(arr1)
const max = Math.max(...arr1)
// console.log(max)
// // 返回下标以 1 开始
const arr2 = arr1.map((item,index)=> item === max ? index +1:0).filter(item => item)
// const arr2 = arr1.map((item,index)=> item === max ? index +1:-1).filter(item => item >=0)
console.log(arr2)