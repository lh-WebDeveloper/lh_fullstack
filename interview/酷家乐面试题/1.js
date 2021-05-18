// if (true) {
//     // 死区开始
//     z = 'lut'; //  ReferenceError
//     console.log(z); //  ReferenceError
//     // 开始声明变量，死区结束
//     let z; 
//     console.log(z); // undefined
//     z = 520;
//     console.log(z); // 520
//   }

  //“小明今年22岁，来自杭州。兴趣是看电影和旅游。他有两个姐姐，一个叫小芬，今年25岁，职业是护士。还有一个叫小芳，今年23岁，是一名小学老师。”
  // var person={
  //   name:'小明',
  //   age:'22',
  //   address:'杭州',
  //   interest:['看电影','旅游'],
  //   sister:[{
  //     name:'小芬',
  //     age:25,
  //     job:'护士',
  //   },{
  //     name:'小芳',
  //     age:23,
  //     job:'teacher'
  //   }]
  // }
  
  for (var i = 0; i < 5; i++) {
    (function(j){
    setTimeout(function() {
        console.log(j);
      }, i*1000);
  })(i)
  }

//console.log(i);