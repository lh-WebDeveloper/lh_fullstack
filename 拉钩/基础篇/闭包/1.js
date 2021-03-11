//全局作用域
var globalName='global';
function getName(){
    console.log(globalName) //global
    var name='li'
    console.log(name)//li
}
getName();
//console.log(name);
console.log(globalName);//global
function setName(){
    vName='setName';
}
setName();
console.log(vName);//setName
//console.log(woindow.vName)