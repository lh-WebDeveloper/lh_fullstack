console.log(1);
let a = setTimeout(() => {console.log(2)}, 0);
console.log(3);
Promise.resolve(4).then(b => {
    console.log(b);
    clearTimeout(a);
});
console.log(5);