//第四种:原型式继承
let parent4={
    name:"parent4",
    friend:["p1","p2","p3"],
    getName:function(){
        return this.name;
    }
}
let person4=Object.create(parent4);
person4.name="tom";
person4.friends.push("jerry");

let person5=Object.create(person4);
person5.friend.push("lucy");

console.log(person4.name);  //tom
console.log(person4.name===person4.getName());//true
console.log(person5.name);//parent4
console.log(person4.friends);
console.log(person5.friends);