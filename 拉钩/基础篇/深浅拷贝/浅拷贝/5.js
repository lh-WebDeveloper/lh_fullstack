let arr=[1,2,{val:4}];
let newArr=arr.slice();
newArr[2].val=1000;
console.log(arr);//[1,2,{val:1000}]
console.log(newArr)//[1,2,{val:1000}]