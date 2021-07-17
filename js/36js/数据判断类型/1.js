function typeOf(obj) {
    let res = Object.prototype.toString.call(obj).split(' ')[1]
    res = res.substring(0, res.length - 1).toLowerCase()//去掉最后那个右括号,然后利用toLowerCase大写转小写
    return res
}
console.log(typeOf([]));     // 'array'
console.log(typeOf({}));        // 'object'
console.log(typeOf(new Date));  // 'date'
