let obj = {
    a: {
        b: {
            c: 666
        }
    }
}
let str = 'a.b.c'//先得到'a.b.c' 再得到 'a.f.c'要返回错误

function getData(obj, str) {
    let arr=str.split('.');
     for(let i=0;i<arr.length;i++){   
        obj=obj[arr[i]]
     }
     return obj;
}
console.log(getData(obj, str)) //666
