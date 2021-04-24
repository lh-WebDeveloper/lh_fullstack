let a= function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('aaaa')
            resolve('ok')
        },1000)
    })
}
let b= function(){
    setTimeout(()=>{
        console.log('bbbbb')
    },500)
}
a().then((res)=>{
    console.log(res);
    b()
})

