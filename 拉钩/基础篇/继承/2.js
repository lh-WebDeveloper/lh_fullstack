//第二种构造函数继承(借助call)
function Parent1() {
    this.name='parent1';
}
Parent1.prototype.getName=function(){
    return this.name;
}
function Child1() {
    Parent1.call(this);
    this.type='child1';
}
let child=new Child1();
console.log(child);//Child1 { name: 'parent1', type: 'child1' }
console.log(child.getName())//报错