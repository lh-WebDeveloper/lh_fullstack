//组合继承(前两种组合)
function Parent3() {
    this.name='parent3';
    this.play=[1,2,3];
}
Parent3.prototype.getName=function(){
    return this.name;
}
function Child3() {
    //第二次调用parent3()
    Parent3.call(this);
    this.type='child3';
}
//第一次调用parent3()
Child3.prototype=new Parent3();
//手动挂上构造器,指向自己的构造函数
Child3.prototype.constructor=Child3;
var s3=new Child3();
var s4=new Child3();
s3.play.push(4);
console.log(s3.play,s4.play);//互不影响  [ 1, 2, 3, 4 ] [ 1, 2, 3 ]
console.log(s3.getName());//parent3
console.log(s4.getName());//parent3