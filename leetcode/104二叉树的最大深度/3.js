var maxDepth=function (root) {
    if(root==0){
        return 0;
    }
    let dep=0;
    dep = 1+ Math.max(maxDepth(root.left),maxDepth(root.right));
    return dep;
}