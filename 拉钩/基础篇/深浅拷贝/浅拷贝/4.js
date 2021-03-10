let arr=[1,2,3];
let newArr=arr.concat();
newArr[1]=100;
console.log(arr);//[1,2,3]
console.log(newArr);//[1,100,3]