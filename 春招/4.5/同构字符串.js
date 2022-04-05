// 方法1 
// 分别以 s 和 t 中出现的字符作为主键，记录其出现的位置
// 遍历字符串，若出现对应位置的字符串的值不相等，则结果为false
// 遍历结束，结果为true
var isIsomorphic = function(s, t) {
    let sobj={}, tobj={};
    for(let i=0;i<s.length;i++){
        if(sobj[s[i]] !==tobj[t[i]]){
            return false
        }
        sobj[s[i]]=i+1;
        tobj[t[i]]=i+1;
    }
    return true
};


// 方法2
// 使用indexOf来处理。直接判断indexOf的值是否相等。
var isIsomorphic = function(s, t){
    // let i=0;
    // while(i<s.length){
    //     if(s.indexOf(s[i]) !== t.indexOf(t[i])){
    //         return false
    //     }
    //     i++;
    // }
    // return true


    // for(let i=0;i<s.length;i++){
    //     if(s.indexOf(s[i]) !== t.indexOf(t[i])){
    //         return false
    //     }
    // }
    // return true


    // lastIndexOf方法
    for(let i=s.length;i--;){
        if(s.lastIndexOf(s[i]) !== t.lastIndexOf(t[i])){
            return false
        }
    }
    return  true
}

