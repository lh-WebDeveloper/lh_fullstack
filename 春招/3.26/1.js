var str = 'fergerghhjyhtthytjdhgyrj';
//用来存储不重复的字符串
var newStr = '';
//字符串去重  将不重复的字符串存储到一个新的字符串内

//将每一个字符单独提出来
for (var i = 0; i < str.length; i++) {
    //判断有没有在newStr中出现过 没有出现过 放到newStr内
    if (newStr.lastIndexOf(str[i]) == -1) {
        newStr += str[i];
    }
}
//  console.log(newStr);//ABC你好の
for (var i = 0; i < newStr.length; i++) {
    var count = 0;
    for (var j = 0; j < str.length; j++) {
        //判断元素是否相等 如果相等 则次数加1
        if(newStr[i]==str[j]){
            count++;
        }
    }
    console.log(newStr[i],count);
}