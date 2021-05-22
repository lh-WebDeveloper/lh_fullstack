// 深拷贝
function clone(origin){
    if( origin !== null && typeof origin !== "object")
        return origin;
    
    let target = origin instanceof Array? [] : {};
    for(let key in origin)
    {
        if(origin.hasOwnProperty(key))
            target[key] = clone(origin[key])
    }
    return target;
}