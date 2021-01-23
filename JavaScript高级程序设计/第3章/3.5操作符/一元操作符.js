let age =29;
let anotherAge = --age + 2;
console.log(age);//28
console.log(anotherAge);//30

let s1 ="2";
let s2 ="z";
let b =false;
let f =1.1;
let o ={
    valueOf(){
        return -1;
    }
};
s1++;//3
s2++;//NaN
b++;//1
f--;//0.1000000009
o--;//-2


/* let num = 25;
num = +num;
console.log(num); //25   */

let num = 25;
num = -num;
console.log(num);//-25
