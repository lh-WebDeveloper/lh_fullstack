//sort 升序
let arr=[12,2,34,45,11,32,5,22,10]
arr.sort(function(a,b){
    return a-b
})
console.log(arr)

//sort 降序
let arr1=[12,2,34,45,11,32,5,22,10]
arr1.sort(function(a,b){
    return b-a
})
console.log(arr1)