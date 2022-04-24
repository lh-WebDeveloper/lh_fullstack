var partition = function(s) {
    const result=[]; //记录结果
    
    function getStr(index,path){ 
        if(index == s.length){
            result.push([...path]) //浅拷贝
            return 
        }
        for(let i=index;i<s.length;i++){
            // 判断当前是否为回文串
            if( isPalindrome(s,index,i)){
                //保存了前i个字符就继续从第i+1开始分割
                path.push(s.slice(index,i+1))
                // console.log(path)
                getStr(i+1,path)
                path.pop()
            }
        }
    }
    getStr(0,[])
    return result
};
  //利用双指针判断字符串是否为回文串串
function isPalindrome(s,left,right){
    while(left <= right){
        if(s[left] !== s[right]){
            return false
        }
        left++;
        right--;
    }
    return true
}
console.log(partition("aab"))







