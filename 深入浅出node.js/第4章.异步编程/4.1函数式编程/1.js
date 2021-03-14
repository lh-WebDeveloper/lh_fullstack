//高阶函数
var points=[40,100,1,5,25,10];
points.sort(function(a,b){
    return a-b;
});
console.log(points)//[ 1, 5, 10, 25, 40, 100 ]
