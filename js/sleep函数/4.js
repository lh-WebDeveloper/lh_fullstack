//ES5
function sleep(callback,time) {
    if(typeof callback === 'function')
      setTimeout(callback,time)
  }
  
function output(){
    console.log(1);
  }
sleep(output,1000);