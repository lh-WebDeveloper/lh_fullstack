var isSymmetric=function(root){
    if(root === null) return true;
    function compare(left,right){
       if(left === null && right === null) return true;
       if(left === null || right === null) return false;
       if(left.val !== right.val) return false;
       return compare(left.right,right.left) && compare(left.left,right.right)
    }
    return compare(root.left,root.right)
}

