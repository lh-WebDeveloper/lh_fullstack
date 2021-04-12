var someResource = getData();
setInterval(function() {
    var node = document.getElementById('Node');
    if(node) {
        node.innerHTML = JSON.stringify(someResource);
        // 定时器也没有清除，可以清除掉
    }
    // node、someResource 存储了大量数据，无法回收
}, 1000);
