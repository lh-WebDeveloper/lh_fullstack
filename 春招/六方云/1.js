// 数组内的值为任意多数值,找到其中出现次数最多的元素   /次数为${max}`;
function repeat(array) {
    let a ={}
    let max = 0;
    let maxele = null;
    for (let i=0;i<array.length;i++){
        a[array[i]] == undefined ? a[array[i]] = 1 : a[array[i]]++;
        if(a[array[i]] > max){
            maxele = array[i];
            max = a[array[i]];
        }
    }
    return  `次数最多的元素为:${maxele}`
}

console.log(repeat([1,2,1,2,2,2,1]))



// var arr = [1,1,1,2,2,2,2,2,2,2,3,3,3,4,4,5,6,7,7,8];
// var maxNum = 0;
// var maxName = "";
// var obj = {};
// arr.forEach((ele,index)=>{
// 	obj[ele] ? obj[ele] += 1 : obj[ele] = 1;
// })
// for(let r in obj) {
// 	if(obj[r]>maxNum){
// 		maxNum = obj[r]
// 	}
// }

// console.log(`最多重复的数${maxName},重复次数为:${maxNum}`)

        

