//Promise/Deferred模式
/* $.get('/api',{
    success:onSuccess,
    error:onError,
    complete:onComplete
}); */


res.then(function(){
    //Done
},function(err){
    //Error
},function(chunk){
    console.log('BODY:'+chunk);
})