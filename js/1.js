var person = {
    name:'张三',
    age:18,
    getName:function(){
       console.log('我的名字是：'+this.name)
    },
    getAge:()=>{
       console.log('我的年龄是：'+this.age)
    }
  }
  
  person.getName() // 我的名字是张三
  person.getAge()  // 我的年龄是undefined
  