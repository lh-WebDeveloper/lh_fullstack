// 浅拷贝
function shallowCopy(target){
    let cloneTarget = {};
    for(const key in target) {
        if(target.hasOwnProperty(key))
        cloneTarget[key] = target[key];
    }
    return cloneTarget;
}