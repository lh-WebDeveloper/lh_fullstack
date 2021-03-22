let person = new Object();
person.name = "Nicholas";
console.log(person.name);// Nicholas

let name = "Nicholas";
name.age=27;
console.log(name.age);

let name1 = "Nicholas";
let name2 = new String("Matt");
name1.age = 27;
name2.age = 26;
console.log(name1.age);//undefined
console.log(name2.age);//26
console.log(typeof name1);//string
console.log(typeof name2);//Object