var restoreIpAddresses = function(s) {
    let result=[];
    let path=[];
    let index=0; //index表示从s的哪一位开始，这里从s的第0位开始
    if(s.length < 4 || s.length > 12){ //条件判断
        return []
    }
    function getAddress(index,path){
        if(path.length === 4 && index == s.length){
            result.push(path.join('.'))
        }
        for(let i=index;i<s.length;i++){
            //位数超过1位并且起始点是0的直接返回
            if (i + 1 - index > 1 && s[index] === '0') return;
            //保存了前i个字符(rest)就继续从第i+1开始分割
            const str = s.substring(index, i + 1)
            // 大于255位的也返回
            if (str > 255) return;
            path.push(str);
            getAddress(i+1,path)
            path.pop()
        }
    }
    getAddress(index,path)
    return result
};
s = "0000"
console.log(restoreIpAddresses(s))