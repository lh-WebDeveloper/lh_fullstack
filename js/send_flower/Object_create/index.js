//类也是抽象的,实例化对象
//js没有类,只有对象 基于原型式
// prototype __proto__
const person ={
    isHuman:false,
    printIntroduction:function(){
        console.log('My name is ${this.name}. Am I human ? ${this.isHuman}');
    }
}
const me = Object.create(person);
console.log(me.__proto__);