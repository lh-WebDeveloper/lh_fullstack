function identify(){
    return this.name.toUpperCase();
}
function speak(){
    var greeting = "Hello，l 'm"+identify.call(this);
    console.log(greeting);
}
var me ={
    name:"kyle"
};
var you ={
    name:"Reader"
};
identify.call(me);//kYLE
identify.call(you);//READER
speak.call(me);//Hello, 我是KYLE
speak.call(you);//Hello, 我是READER

function identify(context){
    return context.name.toUpperCase();
}
function speak(context){
    var greeting = "Hello，l'm " + identify(context);
    console.log(greeting);
}
identify(you);//READER
speak(me);//hello, l'm KYLE