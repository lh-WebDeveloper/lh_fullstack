function maxLength( arr ) {
    let max = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let index=newArr.indexOf(arr[i])
        if (newArr.indexOf(arr[i]) !== -1) {
            newArr.splice(0, index+1)// 下标加1
        }
        console.log(newArr)
        newArr.push(arr[i])
        max = Math.max(max,newArr.length);
    }
    return max
}
let nums=[2,3,4,5]
console.log(maxLength(nums))
