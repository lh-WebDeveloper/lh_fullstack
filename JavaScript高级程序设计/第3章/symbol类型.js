let sym = Symbol()
console.log(typeof sym);//symbol

let genericSymbol = Symbol();
console.log(genericSymbol);//Symbol
let fooSymbol = Symbol('foo');
console.log(fooSymbol)//Symbol('foo')

let fooGlobalSymbol = Symbol.for('foo');
console.log(typeof fooGlobalSymbol)//symbol


//创建全局符号
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s));//foo

//创建普通符号
let s2 = Symbol('bar');
console.log(Symbol.keyFor(s2));//undefined


let o ={
    [Symbol('foo')]:'foo val',
    [Symbol('bar')]:'bar val',
};
console.log(o);


function Foo() {}
let f = new Foo();
console.log(f instanceof Foo);//true

function Foo() {}
let b = new Foo();
console.log(Foo[Symbol.hasInstance](b));//true
