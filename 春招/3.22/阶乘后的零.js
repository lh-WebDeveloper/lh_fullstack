var trailingZeroes = function(n) {
    let r=0;
    while(n>1){
        n=Math.floor(n/5)
        r+=n;
    }
    return r
};
console.log(trailingZeroes(3))