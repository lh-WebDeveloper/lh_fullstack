function flatten(arr) {
    var result = [];//定义一个新数组
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {//判断是否为数组 如果元素为数组则进入
            result = result.concat(flatten(arr[i]))// concat 合并数组,内部进行嵌套
        } else {
            result.push(arr[i])//符合条件则嵌套进数组
        }
    }
    return result;
}
var arr=[1,2,[3,4,[5,6]]];
console.log(flatten(arr));// [ 1, 2, 3, 4, 5, 6 ]
