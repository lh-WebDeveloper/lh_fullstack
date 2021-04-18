Promise.resolve().then(() => {
    console.log(0); // 1 
    return Promise.resolve(4);// 5
}).then((res) => {
    console.log(res)
})
Promise.resolve().then(() => {
    console.log(1); // 2
}).then(() => {
    console.log(2); // 3
}).then(() => {
    console.log(3); // 4
}).then(() => {
    console.log(5); // 6
}).then(() =>{
    console.log(6); // 7
})
// 输出结果：
// 0、1、2、3、4、5、6 