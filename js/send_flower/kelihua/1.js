function add(a, b) {
    console.log(a + b);
}

// 执行 add 函数，一次传入两个参数即可
add(1, 2) // 3

// 假设有一个 curry 函数可以做到柯里化
// var addCurry = curry(add);
// addCurry(1)(2) // 3