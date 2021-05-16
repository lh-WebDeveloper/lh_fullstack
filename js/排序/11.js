// 堆排序
// 平衡二叉堆  自下而上
const heaprify = (arr, i, length) => {
    let root = largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if(arr[largest] < arr[left] && left < length) {
        largest = left
    }
    if(arr[largest] < arr[right] && right < length) {
        largest = right
    }
    if(largest === root) {
        return
    } else {
        [arr[largest], arr[root]] = [arr[root], arr[largest]]
        heaprify(arr, largest, length)
    }
}
const buildMaxHeap = arr => {
    const length = arr.length;
    // 初始化最大堆, 从第一个非叶子结点开始倒序遍历所有的非叶子节点
    for(let i = parseInt(length/2 -1); i>=0; i--) {
        heaprify(arr, i, length)
    }
    for(let i = length - 1; i > 0; i--) {
        // 根节点和最后一个结点交换
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // 重新平衡二叉堆
        heaprify(arr, 0, i)
    }
}
let a = [27, 21, 33, 14, 18, 11, 9, 17, 19, 20]
buildMaxHeap(a)
console.log(a)
