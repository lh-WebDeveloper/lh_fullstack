for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}
// 先猜输出
// 如何实现每1秒钟输出0,1,2,3,4,

// 方法1
for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000*(i+1))
}

// 方法2
for(var i=0;i<5;i++){
    setTimeout((i)=>{
        console.log(i)
    },1000*(i+1),i)
}
for(var i=0;i<5;i++){
    let j=i
    setTimeout((j)=>{
        console.log(j)
    },1000*(j+1),j)
}

// 方法3 
for(var i=0;i<5;i++){
    (function(a){
        setTimeout(function(){
            console.log(a)
        },(a+1)*1000)
    })(i)
}

// 方法4 
for(var i=0;i<5;i++){
    setTimeout(function(i){
        return function(){
            console.log(i)
        }
    }(i),(i+1)*1000)
}

