// executor 执行器的实现
// 状态的转移 
// 如何让执行器决定状态转移的处理
class Promise{
    constructor(executor){
        this.state='pending';//初始化未完成状态
        //成功的值
        this.value=undefined;
        //失败的原因
        this.reason=undefined;
        // 异步任务会把结果交给resolve
        let resolve=(value)=>{
            console.log(value,'-----')
            if(this.state=='pending'){
                console.log('fullfilled 状态被执行')
            this.value=value;
            this.state='fullfilled'
            }
        }
        let reject =(reason)=>{
            if(this.state=='pending'){
                console.log('rejected 状态被执行')
                this.reason=reason;
                this.state='rejected'
            }
        }
        try{
            executor(resolve,reject);
        }catch(err){
            reject(err)
        }
    }
    // then(){

    // }
}
new Promise((resolve,reject)=>{
    // 将时间比较多的任务封装起来,以实现异步变同步
    setTimeout(()=>{
        //console.log(0);
        reject('10');
        //语法错误
        //throw new Error('出错了');
    },1000)
});