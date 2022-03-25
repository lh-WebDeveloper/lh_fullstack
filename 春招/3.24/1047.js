var removeDuplicates = function(s) {
    let stack=[]
    for(c of s){
        let pre=stack.pop()
        if(pre !==c){
            stack.push(pre);
            stack.push(c)
        }
    }
    return stack.join('')
};
console.log(removeDuplicates("abbaca"))