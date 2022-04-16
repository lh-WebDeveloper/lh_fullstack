// 从数组对象arr中,找出整数或字符串型的数字放在a变量中,其余类型放在b变量中
const arr=[
    {value:'1'},
    {value:'html'},
    {value:'css'},
    {value:'2'},
    {value:'3'},
    {value:'中文'}
]
const a=[];
const b=[];
arr.map(item=>{
    if(!isNaN(item.value)){
        a.push(item.value)
    }else{
        b.push(item.value)
    }
})
console.log(a);
console.log(b);


// 改进
arr.map(item=>{
    !isNaN(item.value) ? a.push(item.value):b.push(item.value)
})
console.log(a);
console.log(b);