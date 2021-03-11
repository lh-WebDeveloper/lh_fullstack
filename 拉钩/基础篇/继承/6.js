//第六种:寄生组合式继承
function clone(parent,child){
    child.prototype=Object.create(parent.prototype);
    child.prototype.constructor=child;
}
function Parent6(){
    this.name='parent6';
    this.play=[1,2,3];
}
Parent6.prototype.getName=function(){
    return this.name;
}
function Child6(){
    Parent6.call(this);
    this.friend='child';
}
clone(Parent6,Child6);
Child6.prototype.getFriends=function(){
    return this.friend;
}
let person6=new Child6();
console.log(person6);
console.log(person6.getName());
console.log(person6.getFriends());