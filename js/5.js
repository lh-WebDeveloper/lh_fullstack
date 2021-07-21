// var quickSort = function(arr) {
//     if(arr.length<=1){
//         return arr;
//     }
//     for(i=0;i<arr.length/2;i++){
//         for(j=1;j<arr.length-1;j++){
//             if(arr[i]>arr[j]){
                
//             }
//             }
//         }
//     }
// };
var s1=parseInt(Math.random()*10+1);//生成[1,10],包含1和10的随机数
console.log(s1)

var s2=parseInt(Math.random()*8+2);//生成(1,10),不包含1和10的随机数
console.log(s2)

var s3=Math.ceil(Math.random()*10);//获取从1到10的随机整数，取0的概率极小
console.log(s3)

var s4=Math.round(Math.random()*10);//基本均衡获取0到10的随机整数,其中获取最小值0和最大值10的几率少一半
console.log(s4)

var s5=Math.round(Math.random())//可均衡获取0到1的随机整数
console.log(s5)

var s6=Math.floor(Math.random()*10)//可均衡获取0到9的随机整数
console.log(s6)

Math.floor()//向下取整
Math.ceil()//向上取整
Math.round()//四舍五入
console.log(Math.random())

// var s4=Math.floor(Math.random()*9);
// console.log(s4)
// let arr=[1,23,3,3,4,4,5,5]
// let a=[...new Set(arr)]
// console.log(a)


// let nu=[1,23,3,3,4,4,5,5]
// function unique(nu){
//     let s=new Set(nu)
//     return Array.from(s)
// }
// console.log(unique(nu))

