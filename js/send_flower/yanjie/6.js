function duplicateCount(text){
    var str =text.toLowerCase().split('').sort().join('')
    //请得到所有的数字
    var word ='123-4560-666';
    //  /\d+/ 正则 字符串是否符合规则
    console.log(/\d+/.test(word))
    console.log(word.match(/\d+/g));
    //相邻的字符是一样的
    //[a-z] 取值范围
     var arr =str.match(/(.)\1+/g);
     console.log(str.match(/(.)\1/g));
     //console.log(arr)
     return arr.length
}
console.log(duplicateCount('aaaaaaddsdjfwuhh'))