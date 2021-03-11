//正则和JSON方法共同处理
let arr=[1,[2,[3,[4,5]]],6];
function flatten(arr){
    let str=JSON.stringify(arr);
    str=str.replace(/(\[|\])/g,'');
    str='['+str+']';
    return JSON.parse(str);
}
console.log(flatten(arr));