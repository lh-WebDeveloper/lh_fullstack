//Generator
function* sleepGenerator(time) {
    yield new Promise(function(resolve,reject){
      setTimeout(resolve,time);
    })
  }
sleepGenerator(1000).next().value.then(()=>{console.log(1)})