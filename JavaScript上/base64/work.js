this.addEventListener('message', (e)=>{//监听事件
    //console.log(e);
    //console.log(document.body)
    this.postMessage('Your said:' + e.data);
})