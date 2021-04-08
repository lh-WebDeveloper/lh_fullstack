// 双重for（或while）循环是比较笨拙的方法，它实现的原理很简单：
// 先定义一个包含原始数组第一个元素的数组，然后遍历原始数组，
// 将原始数组中的每个元素与新数组中的每个元素进行比对，
// 如果不重复则添加到新数组中，最后返回新数组；因为它的时间复杂度是O(n^2)，
// 如果数组长度很大，那么将会非常耗费内存
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        let flag = true
        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                flag = false;
                break
            }
        }
        if (flag) {
            res.push(arr[i])
        }
    }
    return res
}

