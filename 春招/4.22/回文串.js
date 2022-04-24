// 双指针
var isPalindrome = function(s) {
    const newStr = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('');
    console.log(newStr)
    let left=0;
    let right=newStr.length-1;
    while(left<right){
        if( newStr[left] !==newStr[right]){
            return false
        }
        left++;
        right--;
    }
    return true
};
s="A man, a plan, a canal: Panama"
console.log(isPalindrome(s))


// 正则进行匹配,然后对进行处理
var isPalindrome = function(s) {
    let valid = s.toLowerCase().match(/[a-z0-9]+/g);// valid为进行正则匹配后筛选出来的数组
    // console.log(valid)
    if(!valid){
        return true;
    }
    let str = valid.join("");// 数据预处理(正则匹配)后得到的字符串
    // console.log(str)
    let comp = str.split("").reverse().join("");// 将字符串翻转
    // console.log(comp)
    return comp === str;
};
s="A man, a plan, a canal: Panama"
console.log(isPalindrome(s))