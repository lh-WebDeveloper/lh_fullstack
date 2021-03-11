//第五种:寄生式继承
let parent5={
    name:"parent5",
    friends:["p1","p2","p3"],
    getName:function(){
        return this.name;
    }
};
function clone(original){
    let clone = Object.create(original);
    clone.getFriend=function(){
        return this.friends;
    }
    return clone;
}
let person5=clone(parent5);
console.log(person5.getName());//parent5
console.log(person5.getFriend());//[ 'p1', 'p2', 'p3' ]