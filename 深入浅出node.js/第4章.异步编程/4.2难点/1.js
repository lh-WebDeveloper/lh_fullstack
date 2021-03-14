/* var async=function(callback){
    process.nextTick(callback);
};

try{
    async(callback);
}catch(e){

} */

var async = function(callback){
    process.nextTick(function(){
        var result=something;
        if(error){
            return callback(error);
        }
        callback(null,results);
    });
};