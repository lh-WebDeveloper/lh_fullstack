var foo= a=>{
    console.log(a);
};
foo(2);//2


var obj ={
    count:0,
    cool:function coolFn(){
        if(this.count<1){
            setTimeout(()=>{
                this.count++;
                console.log("awesome?");
            },100);
        }
    }
};
obj.cool();//awesome?