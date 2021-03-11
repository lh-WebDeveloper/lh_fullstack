function fun1(){
    var a=1;
    return function(){
        console.log(a);
    }
}
fun1();
var result=fun1();
result();//1