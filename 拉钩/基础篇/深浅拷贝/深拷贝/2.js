let cloneObj={}
for(let key in obj){
    if(typeof obj[key]==='object'){
        cloneObj[key]=deepClone(obj[key])
    }else{
        cloneObj[key]=obj[key]
    }
}
return cloneObj
let obj2=deepClone(obj1);
obj1.a.b=2;
console.log(obj2);