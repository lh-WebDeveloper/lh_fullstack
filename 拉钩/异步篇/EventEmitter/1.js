var events = require('events');
var emitter = new events.EventEmitter();
function hello1(name){
  console.log("hello 1",name);
}
function hello2(name){
  console.log("hello 2",name);
}
emitter.addListener('say',hello1);
emitter.addListener('say',hello2);
emitter.emit('say','John');
//输出hello 1 John 
//输出hello 2 John
emitter.removeListener('say',hello1);
emitter.emit('say','John');
//相应的，监听say事件的hello1事件被移除
//只输出hello 2 John
