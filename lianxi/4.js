a =2;
var a;
console.log(a);

var a;
console.log(a);
var a=2;


foo();
function foo(){
    console.log(a)//undefied
    var a =2;
}


foo();//3
function foo(){
    console.log(1);
}
var foo = function(){
    console.log(2);
};
function foo(){
    console.log(3);
}