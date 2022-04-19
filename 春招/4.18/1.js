function test(str) {
    let arr = str.split(' ')
    console.log(arr);
    arr.sort((a,b) => a.length - b.length)
    console.log(arr)
    arr.forEach((item,index) => {
        arr[index] = item.toLowerCase()
    })
    // arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
    console.log(arr);
    return arr.join(' ')
}
let str="Show me the code"
console.log(test(str))