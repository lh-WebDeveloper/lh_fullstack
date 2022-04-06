// 先将字符串用' '分隔成数组，再将空字符去除，最后统计长度即可。
var countSegments = function(s) {
    return s.split(' ').filter(item=>item).length
    // return s.split(' ').filter(item => item !== '').length
};
let s="Hello, my name is John"
console.log(countSegments(s))