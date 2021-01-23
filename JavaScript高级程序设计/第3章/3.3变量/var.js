/* function test() {
  message = "hi";//局部变量
}
test();
console.log(message);//"hi"


function foo() {
    console.log(age);
    var age=26;
}
foo();// undefined
 */

function foo() {
    var age;
    console.log(age);
     age=26;
}
foo();// undefined


/* function foo() {
    var age =16;
    var age =26;
    var age =36;
    console.log(age);
}
foo();  */