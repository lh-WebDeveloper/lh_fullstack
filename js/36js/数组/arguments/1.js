function sum(a, b) {
    let args = Array.prototype.slice.call(arguments);
    console.log(args.reduce((sum, cur) => sum + cur));//args可以调用数组原生的方法啦
  }
sum(1, 2);//3