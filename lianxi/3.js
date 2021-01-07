 function doSomething(a){
    b = a + doSomethingElse(a*2)
    console.log(b*3)
}
function doSomethingElse(a){
    return a -1;
}
var b;
doSomething(2)// 15 */



 function doSomething(a){
    function doSomethingElse(a){
        return a -1;
    }
    var b ;
    b = a + doSomethingElse(a*2);
    console.log(b*3);
}
doSomething(2);//15 */


 function foo(){
    function bar(a){
        i = 3;// 修改for循环所属作用域中的i
        console.log(a+i);
    }
    for (var i =0;i<10;i++){
        bar(i*2);//糟糕,无限循环了!
    }
}
foo();



var a = 2;
function foo(){//<--添加这一行
    var a = 3;
    console.log(a);//3
}//<--以及一行
foo();{//<--以及这一行
    console.log(a)//2
}


var a = 2;
(function foo(){
    var a = 3;
    console.log(a);//3
})();
console.log(a);//2



var foo = true;
if (foo){
    var bar = foo * 2;
    bar = doSomething(bar);
    console.log(bar);
}


/* for (let i=0; i<10; i++){
    console.log(i);
}
console.log(i);// ReferenceError */


var foo =true;
if(foo){
    var a = 2;
    const b =3;//包含在if中的块作用域常量

    a = 3; //正常
    //b = 4; //错误
}
console.log(a);//3
console.log(b);//ReferenceError