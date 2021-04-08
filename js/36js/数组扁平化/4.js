function* flatten(arr){
    if(Array.isArray(arr)){
        for(let i = 0 ;i<arr.length;i++){
            yield* flatten(arr[i]);
        }
    }else{
        yield arr;
    }
}
　  let arr1 = [1, 2, 3, [11, 21, 31]];
    let list=[]
    for (const x of flatten(arr1)) {
    list.push(x)
    }
console.log(list)

