var name="World!";
(function(){
    var name;
    if(typeof name=== 'undefined'){
        name='Jack';
        console.log('Goodbye'+name);
    }
    else{
        console.log('hello'+name);
    }
})();


var str='what is this';
var x=str.search('is');

console.log(x,'===')


for(let  i=0;i<5;++i){
    setTimeout(function(){
        console.log(i+ ' ');
    },100);
}

class Phone{
    constructor(brand){
      this.brand = brand;
  }
    call(){}
}
  console.log(typeof Phone)

  var a = parseInt([0,0,1,0,0].join('')+1)
  console.log(a,'====')


var foo='foo';
 
var bar='bar';
 
function myFunc() {
 
return foo+bar;
}
 
myFunc();


function Foo() {
    var i = 0;
    return function() {
        console.log(i++);
    }
}
var f1 = Foo()
var f2 = Foo();
console.log(f1());
f1();
f2();

