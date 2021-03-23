//writer 全局
let writer ={
    firstName:"廖",
    lastName:"辉",
    num:10
}
//不太纯
//函数有什么问题?
function appendCompany(obj) {
    let copyWriter=Object.assign({}
        ,obj)
    //修改了全局的对象 
    copyWriter.company='字节' //函数的内部
    return copyWriter;
}
console.log(appendCompany(writer));
if(!writer.company){
    console.log('还在学校')
}
console.log(writer);
//reducer 要避免的 纯函数