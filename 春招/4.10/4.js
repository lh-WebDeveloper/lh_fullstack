// 求某个范围内的质数
const fn = (num) => {
    const res = [2]
    var flag = true
    for(var i=3; i<=num; i++) {
        if(i%2 === 0) {
            continue
        }
        for(var j=i-1; j>1; j--){
            if(i%j === 0) {
                flag = false
                break
            }   
        }
        if(flag) {
            res.push(i)
        }
        flag = true
    }
    return res
}
console.log(fn(10))
