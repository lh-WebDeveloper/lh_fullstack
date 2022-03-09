// function greeter(person) {
//     return "Hello, " + person;
// }
// var user = [0, 1, 2];
// document.body.innerHTML = greeter('user');


console.log(typeof 6);
console.log(typeof true);
console.log(typeof 'jiangxi')
console.log(typeof [])
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof {})


console.log(6 instanceof Number)
console.log(true instanceof Boolean)
console.log('jiangxi' instanceof String)
console.log([] instanceof Array)
console.log(function () { } instanceof Function)
console.log({} instanceof Object)


Object.prototype.toString.call('');   // [object String]
Object.prototype.toString.call(1);    // [object Number]
Object.prototype.toString.call(true); // [object Boolean]
Object.prototype.toString.call(Symbol()); //[object Symbol]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(null); // [object Null]
Object.prototype.toString.call(new Function()); // [object Function]
Object.prototype.toString.call(new Date()); // [object Date]
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(new RegExp()); // [object RegExp]
Object.prototype.toString.call(new Error()); // [object Error]
// Object.prototype.toString.call(document); // [object HTMLDocument]
// Object.prototype.toString.call(window); //[object global] window 是全局对象 global 的引用

const arr = [1, 2, 3, 4, 5];
console.log(arr[2]);
console.log(arr[-1]);
// console.log(arr.at(-2))


// let array = [23, 56, 78, 42, 11, 49]
// array.groupBy((item, index) => {
//     return item > 40 ? '比40大' : "比40小"
// })

const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
console.log(array.findLast(n => n.value % 2 === 1)); // { value: 3 }
