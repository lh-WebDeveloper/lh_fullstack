console.log('begin');//1
setTimeout(() => {
  console.log('setTimeout')//6
}, 0);
new Promise((resolve) => {
  console.log('promise');//2
  resolve()
}).then(() => {
    console.log('then1');//4
  }).then(() => {
    console.log('then2');//5
  });
console.log('end');//3
