var removeDuplicates = function(s, k) {
    let stack=[];
    for(c of s){
        let pre=stack.pop();
        if(!pre || pre[0] !== c){
            stack.push(pre)
            stack.push(c)
        }else if(pre.length<k-1){
            stack.push(pre+c)
        }
    }
    return stack.join('')
};
console.log(removeDuplicates("deeedbbcccbdaa", k = 3))