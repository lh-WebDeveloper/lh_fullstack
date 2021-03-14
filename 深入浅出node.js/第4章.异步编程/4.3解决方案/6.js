//异步并发控制
var Bagpipe=require('bagpipe');
//设定最大并发数为10
var bagpipe=new Bagpipe(10);
for(var i=0;i<100;i++){
    bagpipe.push(async,function(){
        //异步回调执行
    });
}
bagpipe.on('full',function(length){
    console.warn('底层系统处理不能及时完成')
});