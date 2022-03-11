let outObj = {
    inObj: {a: 1, b: 2}
  }
let newObj = {...outObj}
// newObj.inObj.a = 2
console.log(newObj)


let e = {
    d: {a: 1, b: 2}
  }
let f = Object.assign({}, e)
f.d.a = 2
console.log(e) // {inObj: {a: 2, b: 2}}
  