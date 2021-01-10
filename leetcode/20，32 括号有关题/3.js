function longestValidParentheses(s){
    //最长有效匹配括号长度 leetcode 32
    //有效括号的升级版 + 长度
    var max = 0;//最大长度
    if(s.length ==0 ||s.length ==1) return max;//没得匹配
    var stack =[];//使用了栈来实现匹配 空间复杂度o(n)
    //嵌套循环
    //每位括号它的有效匹配长度是可以跟有效匹配是一样的
    for(var i=0;i<s.length;i++){
        var temMap =0;//当前位括号的匹配长度 重新开始
        for(var j =i;j<s.length;j++){//从i开始 自己也算
            if(s[j]=='('){//左括号
                stack.push('(');//入栈
                temMap++;
            }else if(s[j]==')'){
                //右括号
                if(stack.length<1){
                    //栈空的,当前位置括号的有效匹配,结束了 算
                    max = max<temMap?temMap:max;
                    break;
                }else{
                stack.pop();//出栈
                temMap++;
            }
            }
        }
        if(stack.length ==0){//都匹配  从当前位置直到最后一个字符都是有效括号
            max =max<temMap?temMap:max
        }
        stack =[];//清空为本次括号的服务
    }
    return max;
}
console.log(longestValidParentheses('(())('));
console.log(longestValidParentheses('(((('));