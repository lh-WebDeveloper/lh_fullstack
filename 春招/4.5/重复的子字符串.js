// 方法1
// 掐头去尾 双倍字符 若能找到 即是重复
var repeatedSubstringPattern = function(s) {
    // 掐头去尾 双倍字符
    let ss=(s+s).slice(1,-1) //删除字符串第一个和最后一个
    // 若能找到 即是重复
    return ss.indexOf(i) >-1
};