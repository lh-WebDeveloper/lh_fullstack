process.nextTick=function(callback){
    if(process._exiting) return;
    if(tickDepth >=process.maxTickDepth)
    maxTickWarn();
    var tock={callback:callback};
    if(process.domain) tock.domain=process.domain;
    this.nextTickQueue.push(tock);
    if(nextTickQueue.length){
        process._needTickCallback();
    }
}
  