console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object    
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object

console.log(2 instanceof Number)
console.log(true instanceof Boolean)
console.log('srt' instanceof String)
console.log([] instanceof Array)
console.log({} instanceof Object)
console.log(function(){} instanceof Function)



console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true


console.log(Object.prototype.toString.call(2))
console.log(Object.prototype.toString.call(true))
console.log(Object.prototype.toString.call('str'))
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call({}))
console.log(Object.prototype.toString.call(function(){}))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(undefined))
