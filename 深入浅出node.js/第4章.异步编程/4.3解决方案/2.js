//继承events模块
var events = require('events');
function Stream(){
    events.EventEmitter.call(this);
}
util.inherits(Stream,events.EventEmitter);