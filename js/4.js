const num =100
var gj=5
var mj = 3
var xj = 1/3
// 5a+3b+1/3c 100
//a+b+c=100
for(let a=0;a<=100;a++){
    for(let b=0;b<=100;b++){
        for(let c=0;c<=100;c++){
            if(5*a+3*b+1/3*c == 100 && a+b+c == 100){
                console.log('公鸡:',a,'母鸡:',b,'小鸡',c)
            }
        }
    }
}


var arr = [{a:1},{a:2},{a:3},{a:4},{a:5}]
console.log(arr[1],Object.value(arr[1]))
var sum = arr.reduce((pre,cur)=>{
    pre+cur.a
})
console.log(sum)