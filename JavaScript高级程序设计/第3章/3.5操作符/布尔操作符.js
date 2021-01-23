console.log(!false); //true
console.log(!"blue");//false
console.log(!0);//true
console.log(!NaN);//true
console.log(!"");//true
console.log(!12345);//false

let found = true;
let result =(found || someUndeclaredVariable);
console.log(result);//true

/* let founded = true;
let result =(found || someUndeclaredVariable);报错
console.log(result);// */