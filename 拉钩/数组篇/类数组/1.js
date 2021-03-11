//arguments
function foo(name,age,sex){
    console.log(arguments);//[Arguments] { '0': 'jack', '1': '18', '2': 'male' }
    console.log(typeof arguments);//object
    console.log(Object.prototype.toString.call(arguments));//[object Arguments]
}
foo('jack','18','male');