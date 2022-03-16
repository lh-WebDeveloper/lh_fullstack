var preorderTraversal = function(root,res=[]){
    if(!root){
        return res;
    }
    preorderTraversal(root.left,res);
    res.push(root.val);
    preorderTraversal(root.right,res)
    return res;
}
let arr=[1,3,5,null,7,4,8]
console.log(preorderTraversal(arr))