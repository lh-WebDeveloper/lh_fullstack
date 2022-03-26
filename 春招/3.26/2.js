var str3="asfdsf erfrgrgtvrgthytdcfregegtehyrhjutjergrswh wf ";
//第一步；把所有的字母全部变成小写
str3 = str3.toLocaleLowerCase();
//第二步：创建一个空对象，目的：把字母作为键，次数作为值
var obj = {};
//第三步：遍历字符串，获取每个字母
for(var i =0;i<str3.length;i++){
  //判断obj这个对象中有没有这个字母（字母---键）
    var key = str3[i];//每个字母
    if(obj[key]){  //判断obj中有没有这个键
      //对象中有这个字母了
      obj[key]++;
    }else{
    //对象中没有这个字母，那就把字母加到对象中，并且给这个一个出现的次数
        obj[key] = 1;
    }
}
    //遍历对象，显示每个字母的次数
    for(var key in obj){
    console.log(key+"这个字母出现了"+obj[key]+"次");
}

