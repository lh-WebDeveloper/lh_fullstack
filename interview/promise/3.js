// onFulfilled  执行一下  再 then 控制权的转移
// 先存起来  resolve后再执行
// excutor  执行器的实现
// 状态的转移
// thenable 的调用
// 如何让执行器决定状态转移的处理
class Promise {  // then 就是实例的方法
    constructor(executor) {
        this.state = 'pending';   // 初始化未完成状态
        // 成功的值
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        
        // resolve 异步任务会把结果交给resolve
        let resolve = (value) => {
            // console.log(value, '----------');
            if(this.state == 'pending'){
                console.log('fulfiiled状态被执行')
                this.value = value;
                this.state = 'fulfilled';
                this.onResolvedCallbacks.forEach(fn => fn());
                // onFulfilled  执行一下
            }           
        }
        let reject = (reason) => {
            if(this.state == 'pending') {  // promise A+规范
                console.log('rejected状态被执行')
                this.reason = reason;
                this.state = 'rejected';
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }
        try {
            executor(resolve, reject)
        }catch(err) {  // 捕捉错误  出错的消息交给err
            reject(err)
        }
    }
    //  当前promise解决了(完成了状态转移), 把控制权交出来。
    //  js是单线线程, js用异步解决耗时任务 不阻塞, 异步带来了无法控制任务的有序执行
    // 等到状态改变再执行一下
    then(onFullfilled, onRejected) {

        // 状态未fulfilled时, 传入成功后的回调, 将执行权转移
        console.log('onThen...........')
        if(this.state == 'fulfilled') {
            console.log('onFilfulled.....')
            onFullfilled(this.value)
        }
        // 状态为rejected, 传入失败后的回调
        if(this.state == 'rejected') {
            onRejected(this.reason)
        }
        if(this.state == 'pending') {
            this.onResolvedCallbacks.push(() => {
                onFullfilled(this.value)      // 先存起来  resolve后再执行
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
    }
}
new Promise((resolve, reject) => {
    // 这个函数可以封装  将花时间比较多的任务封装起来, 以实现异步变同步
    setTimeout(() => {
        // console.log(0);
        resolve(10)
        // reject('脑子what')
        // 语法错误
        // throw new Error('出错了');
    }, 1000)
}).then((data) => {   // .then是立即执行的  exector是耗时任务
    console.log(data,'++++++++++');
})   // 控制权由异步耗时任务到函数的转移
