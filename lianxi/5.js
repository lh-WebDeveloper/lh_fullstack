function foo(){
    var a =2;
    function bar(){
        console.log(2);//2
    }
    bar();
}
foo();


/* function foo(){
    var a=2;
    function bar(){
        console.log(a);
    }
    return bar;
}
var baz =foo();
baz();//2 */


function foo(){
    var a=2;
    function baz(){
        console.log(a);//2
    }
    bar(baz);
}
function bar(fn){
    fn();
}
foo();


function wait(message){
    setTimeout(function timer(){
        console.log(message);
    },1000)
    }
    wait("hello, closure!");


var a=2;
    (function ITFE(){
        console.log(a);
    })();

/* for(var i=1;i<=5;i++){
    setTimeout(function timer(){
            console.log(i);
        },i*1000);
    }
 */


/* for(var i=1;i<5;i++){
    (function(){
        var j=i;
        setTimeout(function timer(){
            console.log(j);
        },j*1000);
    })();
}
 */
/* for(var i=1;i<5;i++){
    (function(j){
        setTimeout(function timer(){
            console.log(j);
        },j*1000);
    })(i);
}
 */


 for (let i=1;i<5;i++){
     setTimeout(function timer(){
         console.log(i);
     },i*1000)
 }


 //模块
 /* function CoolModule(){
     var something = "cool";
     var another =[1,2,3];
     function doSomething(){
         console.log(something);
     }
     function doAnother(){
         console.log(another.join("!"));
     }
     return{
         doSomething:doSomething,
        doAnother:doAnother
     };
 }
 var foo =CoolModule();
 foo.doSomething();// cool
 foo.doAnother();//1! 2! 3 */

 function CoolModule(id){
     function identify(){
         console.log(id);
     }
     return{
         identify:identify
     };
 }
 var foo1 =CoolModule("foo 1");
 var foo2 =CoolModule("foo 2");
 foo1.identify();
 foo2.identify();