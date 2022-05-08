// 字符串压缩，给定一个字符串，请编写一个字符串压缩程序，将字符串中连续出现的重复字符进行压缩，并输出压缩后的字符串。如：
// xxxyyyyyyz -> x3y6z
// abcbc -> abcbc

function getStr(str){
    let count=1;
    for(let i=0;i<str.length;i++){
        if(str[i]==str[i+1]){
            count++
        }
    }
    return count
}
str="xxxyyyyyyz"
console.log(getStr(str))
