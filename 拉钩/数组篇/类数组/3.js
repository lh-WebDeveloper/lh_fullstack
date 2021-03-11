function add(){
    var sum=0,
    len = arguments.length;
    for(var i=0;i<len;i++){
        sum+=arguments[i];
    }
    return sum;
}
add()
add(1)
//add(1?2)
add(1,2,3,4)