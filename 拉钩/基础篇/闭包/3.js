var fun3;
function fun1(){
    var a=2;
    fun3=function(){
        console.log(a); //2
    }
}
fun1();
fun3();