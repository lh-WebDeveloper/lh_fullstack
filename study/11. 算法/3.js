// 小美给小团一个n个数字构成的数字序列，问小团能不能经过重新排列后形成1到n的排列。

// 举例：

// 小美给小团[2, 1, 3]，则可以经过重新排列后构成[1, 2, 3]，这是可行的。

// 小美给小团[4, 4, 1, 3]，则无法经过重新排列后构成[1, 2, 3, 4]，这是不可行的。

// 为了防止小团靠运气碰对答案，小美会进行多组询问。
function YesNo(arr) {
    let len = arr.length;
    let res = [];
    for(let i = 1; i < len;) {
        let n = arr[i][0];
        let itemArr = arr[i+1];
        itemArr = itemArr.sort((a, b) => a -b);
        let str1 = itemArr.join('');
        let str2 = strN(n);
        let res1 = (str1 == str2?'Yes':'No');
        res.push(res1);
        i = i + 2;
    }

    function strN(n) {
        let str = '';
        for(let i = 01; i <= n; i++) {
            str+=i;
        }
        return str
    }
    return res;
}
console.log(YesNo([[2], [3], [2, 1, 3], [4], [4, 4, 1, 3]]));