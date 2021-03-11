let a={
    name:'jack',
    getName:function(msg){
        return msg+this.name;
    }
}
let b={
    name:'lily'
}
console.log(a.getName('hello~'));//hello~jack
console.log(a.getName.call(b,'hi~'));//hi~lily
console.log(a.getName.apply(b,['hi~']));//hi~lily
let name=a.getName.bind(b,'hello~');
console.log(name());//hello~lily


var arrayLike={
    0:'java',
    1:'script',
    length:2
}
Array.prototype.push.call(arrayLike,'jack','lily');
console.log(typeof arrayLike);//object
console.log(arrayLike);//{ '0': 'java', '1': 'script', '2': 'jack', '3': 'lily', length: 4 }



let arr=[13,6,10,11,17]
const max=Math.max.apply(Math,arr)
const min=Math.min.apply(Math,arr)
console.log(max);//17
console.log(min);//6