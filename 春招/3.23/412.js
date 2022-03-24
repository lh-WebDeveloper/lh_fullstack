var fizzBuzz = function(n) {
    const list =[];
    for(let i=1;i<=n;i++){
        const is3times=i%3===0;
        const is5times=i%5===0;
        const is15times= is3times && is5times
        if(is15times){
            list.push('FizzBuzz');
            continue;
        }
        if(is3times){
            list.push('Fizz');
            continue;
        }
        if(is5times){
            list.push('Buzz');
            continue;
        }
        list.push(`${i}`);
    }
    return list
};
console.log(fizzBuzz(15))