const months=['March','Jan','Feb','Dec'];
months.sort();
console.log(months);

//从大到小
const array1=[1,30,4,21,100000];
array1.sort((a,b)=>b-a);
console.log(array1);

//从小到大
const array2=[1,30,4,21,100000];
array1.sort((a,b)=>a-b);
console.log(array2);