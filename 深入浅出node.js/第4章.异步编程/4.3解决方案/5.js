// const { readFileSync } = require("node:fs")
var serial=eval(Wind.compile("async",function(){
    var file1=$await(readFileSync('file1.txt','utf-8'));
    console.log(file1);
    var file2=$await(readFileSync('file2.txt','utf-8'));
    console.log(file2);
    try{
        var file3=$await(readFileSync('file3.txt','utf-8'));
    }catch(err){
        console.log(err);
    }
}));
serial().start();