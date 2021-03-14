//订阅模式
emitter.on("event1",function(message){
    console.log(message);
});
//事件发布
emitter.emit('event1',"I am message!");