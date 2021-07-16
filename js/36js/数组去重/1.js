let arr = [12,1,12,3,1,88,66,9,66];
function unique(ary) {
        let s  = new Set(ary);
        // Array.from : 将set数据结构转成真正的数组；
        return  Array.from(s)
    }
console.log(unique(arr))
