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
emitter.removeAllListeners('say');
emitter.emit('say','John');
//removeAllListeners 移除了所有关于 say 事件的监听
//因此没有任何输出
