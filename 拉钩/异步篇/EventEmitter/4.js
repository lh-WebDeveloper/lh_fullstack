EventEmitter.prototype.on = function(eventName, listener){
    if (!eventName || !listener) return;
    // 判断回调的 listener 是否为函数
    if (!isValidListener(listener)) {
         throw new TypeError('listener must be a function');
    }
     var events = this.__events;
     var listeners = events[eventName] = events[eventName] || [];
     var listenerIsWrapped = typeof listener === 'object';
     // 不重复添加事件，判断是否有一样的
     if (indexOf(listeners, listener) === -1) {
         listeners.push(listenerIsWrapped ? listener : {
             listener: listener,
             once: false
         });
     }
     return this;
};
// 判断是否是合法的 listener
function isValidListener(listener) {
   if (typeof listener === 'function') {
       return true;
   } else if (listener && typeof listener === 'object') {
       return isValidListener(listener.listener);
   } else {
       return false;
   }
}
// 顾名思义，判断新增自定义事件是否存在
function indexOf(array, item) {
   var result = -1
   item = typeof item === 'object' ? item.listener : item;
   for (var i = 0, len = array.length; i < len; i++) {
       if (array[i].listener === item) {
           result = i;
           break;
       }
   }
   return result;
}
