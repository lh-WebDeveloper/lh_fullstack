// 给出一个字符c,如果它是一个数字或字母,返回true,否则返回false
export class Solution{
    isAlphanumeric(c) {
        // write your code here
        let reg = /[A-Za-z0-9]/g;//用正则表达式判断
        let result = reg.test(c);
        if(result){
            return true;
        }
        else{
            return false;
        }
      }
    
