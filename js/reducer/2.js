/* //数组去重
const arr =[1,2,3,4,5,5,5,6,7];
console.log(arr.reduce((acc,cur)=>{
//每一次都不重复
if(!acc.includes(cur)){
    acc.push(cur)
}
return acc
},[]))


//从第二项开始 
console.log([1,2,3,4].reduce((acc,cur,index,o)=>{
    console.log(acc,cur,index,o)
    return acc+cur
}));

console.log('--------')
console.log([1,2,3,4].reduce((acc,cur,index,o)=>{
    console.log(acc,cur,index,o)
    return acc+cur
},10)); */


//按属性给代码分类
const bills=[
    {
        type:'shop',
        money:233
    },
    {
        type:'study',
        money:341
    },
    {
        type:'shop',
        money:821
    },
    {type:'transfer',money:821},
    {type:'study',money:8},

//函数式编程思想
//坚持原理
console.log(bills.reduce((acc,cur)={
    if(!acc[cur.type]){
        acc[cur.type]=[]
    }
    acc[cur.type].push(cur)
    return acc
},{}))