function unique(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}
console.log(unique([12, 12, 3, 4, 5, 5, 6, 7, 9, 9]));