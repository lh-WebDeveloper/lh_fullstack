let arr=[1,2,3,4,4,4,5,6,7];
let Newarr = arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
    return pre.concat(cur)
    }else{
    return pre
    }
    },[])
console.log(Newarr);