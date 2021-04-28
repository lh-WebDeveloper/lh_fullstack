let obj = {
    a: {
        b: {
            c: 666
        }
    }
}
let str = 'a.b.c'//先得到'a.b.c' 再得到 'a.f.c'要返回错误

function getData(obj, str) {
    return eval(`obj.${str}`);//直接运行字符串，一步到位，太粗暴简单了
}
console.log(getData(obj,str))
