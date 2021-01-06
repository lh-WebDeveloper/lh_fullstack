const dogs =new Map(); //
const friend =new Map();
friend.set('黄志乾','华灯初上');
friend.set('何江涛','鸡毛');
// for (const item of friend) {
//     console.log(item);
// }
friend.forEach((val,key)=>console.log(val,key))
for (const [key,val] of friend) {
    //解构
    console.log(key,val);
}

//遍历它

const [a,b]=[1,2];
const {} = {"a":1,"b":2}
console.log(a,b);


