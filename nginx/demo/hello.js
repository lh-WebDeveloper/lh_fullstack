const http=require('http');
const server=http.createServer((req,res)=>{
    res.write('Hello\n');
    //res.send();
});
server.listen(8080,()=>{
    console.log('服务已启动')
})

