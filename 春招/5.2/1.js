// let name
// console.log(typeof name)
// console.log(typeof sex)
// let sex

let person={name:'te',age:22}
let another=JSON.parse(JSON.stringify(person))
console.log(another)
console.log(person == another)
console.log(person === another)
another.age='22'
console.log(person.age==another.age)
console.log(person.age===another.age)