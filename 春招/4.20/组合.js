var combine = function(n, k) {
    let result=[];// 存放结果
    let path=[];//当前构建的路径
    function getNum(start,path){// start为枚举选择的起点
        if(path.length == k){
            result.push(path.concat())//进行浅拷贝
            return 
        }
        for(let i=start;i<=n;i++){
            path.push(i)
            // console.log(path)
            getNum(i+1,path)
            path.pop() //撤销当前选择
            console.log(path)
        }
    }
    getNum(1,path)
    return result
};
let n=4,k=2
console.log(combine(4,2))