// 数组的indexOf()方法可返回某个指定的元素在数组中首次出现的位置。
// 该方法首先定义一个空数组res，然后调用indexOf方法对原来的数组进行遍历判断，
// 如果元素不在res中，则将其push进res中，最后将res返回即可获得去重的数组
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}
