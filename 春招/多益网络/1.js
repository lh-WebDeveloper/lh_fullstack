// functionn bark(){
//     console.log("Woof!");
// }
// bark.animal="dog"
// 报错 SyntaxError: Unexpected identifier

Array.isArray(Array.prototype)   // 得到的结果为true

RGBA的意思:
GBA的意思是它是在RGB上扩展包括了alpha通道,运行对颜色值设置透明度.
在RGBA中,四个数字以逗号分隔开,前面三个数字标识这个颜色的RGB值.这个设置和RGB并没有任何区别,RGBA也可以设置为百分比,
// 后面的数字代表透明度,范围在0-1之间.1表示不透明,0表示全透明。

前三个值红绿蓝的范围为0到255之间的整数或者0%到100%之间的百分数.这些值描述了红绿蓝三原色在预期色彩中的量.
第四个值,alpha值,制订了色彩的透明度/不透明度,它的范围为0
// 0到1.0之间,0.5为半透明.

TCP协议头部字段不包含源ip地址和目的ip地址

// function(a,b){}.length  报错

var output = (function(x){
    delete x
    return x
})(0)
console.log(output) 
输出0

怎么用js实现整数千分位分隔
https://blog.csdn.net/water_v/article/details/78312710?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165009673816780255228652%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165009673816780255228652&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-78312710.142^v9^control,157^v4^control&utm_term=%E6%80%8E%E4%B9%88%E7%94%A8js%E5%AE%9E%E7%8E%B0%E6%95%B4%E6%95%B0%E5%8D%83%E5%88%86%E4%BD%8D%E5%88%86%E9%9A%94&spm=1018.2226.3001.4187
方法1 
  使用正则表达式

function format (num) {  
    var reg=/\d{1,3}(?=(\d{3})+$)/g;   
    return (num + '').replace(reg, '$&,');  
}

方法2 
  正常思维算法
function format(num){  
    num=num+'';//数字转字符串  
     var str="";//字符串累加  
     for(var i=num.length- 1,j=1;i>=0;i--,j++){  
         if(j%3==0 && i!=0){//每隔三位加逗号，过滤正好在第一个数字的情况  
             str+=num[i]+",";//加千分位逗号  
             continue;  
         }  
         str+=num[i];//倒着累加数字  
     }  
     return str.split('').reverse().join("");//字符串=>数组=>反转=>字符串  
   } 


inline和inline-block的区别
https://blog.csdn.net/colorapp/article/details/37742697?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165009700216780366591825%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165009700216780366591825&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-37742697.142^v9^control,157^v4^control&utm_term=inline%E5%92%8Cinline-block%E7%9A%84%E5%8C%BA%E5%88%AB&spm=1018.2226.3001.4187
display:inline
inline元素不会独占一行,多个相邻的行内元素会排列在同一行里,直到一行排列不下,才会新换一行,其宽度随元素的内容而变化.
inline元素设置width,height属性无效.
inline元素的margin和padding属性,水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果,但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果

display:inline-block
简单来说就是将对象呈现为inline对象,但是对象的内容作为block对象呈现.之后的内联对象会被排列在同一行内.比如我们可以给一个link元素inline-block属性值,使其既具有block的宽度高度特性又具有inline的同行特性
