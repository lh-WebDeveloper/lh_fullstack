if(true){
    var name = 'li'
    console.log(name);
}
console.log(name);

if(true){
    let age =26;
    console.log(age);
}
//console.log(age);//age 未定义


/* var name = "li";
console.log(window.name);
let age = "26";
console.log(window.age); */


for(var i = 0; i < 5; ++i){
    setTimeout(()=>console.log(i),0)
}

for(let i = 0; i < 5; ++i){
    setTimeout(()=>console.log(i),0)
}