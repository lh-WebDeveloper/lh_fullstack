// 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，
// 如果不等则说明该元素是重复元素
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    return Array.prototype.filter.call(arr, function(item, index){
        return arr.indexOf(item) === index;
    });
}


