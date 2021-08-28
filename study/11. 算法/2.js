function maxStr(num, arr) {
    const diff = {}
    for(let i = 0; i < num; i++) {
        arr[i] = arr[i].toLowerCase()
        if(diff[arr[i]] !== undefined) {
            diff[arr[i]]++;
        } else {
            diff[arr[i]] = 1;
        }
    }
    let num1 = Object.values(diff);
    let maxNum = Math.max(...num1);
    let stack = [];
    for(let key in diff) {
        if(diff[key] === maxNum) {
            stack.push(key);
        }
    }
    function sortKey(arr) {
        let a = arr.reduce(function (pre, cur, curindex, arr) {
            let n = Math.min(pre.toString().length, cur.toString().length)
            for(let i = 0; i < n;) {
                if(pre[i] > cur[i]) {
                    return cur
                } else if(pre[i] < cur[i]) {
                    return pre
                } else {
                    i++;
                }
            }
        }, arr[0])
        return a;
    }
    let b = sortKey(stack);
    return b;
}
maxStr(2, ['aa', 'bb'])