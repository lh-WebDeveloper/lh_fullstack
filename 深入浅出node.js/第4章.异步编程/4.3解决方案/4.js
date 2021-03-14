//流程控制库
async.series([
    function (callback){
        fs.readFile('file1.txt','utf-8',callback);
    },
    function(callback){
        fs.readFile('file2.txt','utf-8',callback);
    }
],function(err,results){
    //results=>[file1.txt,file2.txt]
});