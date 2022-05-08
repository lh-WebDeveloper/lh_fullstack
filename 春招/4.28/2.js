function palindrome( str ) {
    // write code herei
    // for(let i=0;i<str.length;i++){
    // if(str.indexOf(i) === str.lastindexOf(i)){
    //     return true
    //     }
    // }
    // return false  
    const newStr=str.split('').reverse().join('')
    return newStr == str
}
str="aba"
console.log(palindrome(str))