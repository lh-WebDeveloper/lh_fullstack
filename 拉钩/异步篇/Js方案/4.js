function testWait() {
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                console.log("testWait");
                resolve();
            }, 1000);
        })
    }
    async function testAwaitUse(){
        await testWait()
        console.log("hello");
        return 123;
        // 输出顺序：testWait，hello
        // 第十行如果不使用await输出顺序：hello , testWait
    }
    console.log(testAwaitUse());
    