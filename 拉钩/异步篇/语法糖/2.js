function* gen1() {
    yield 1;
    yield* gen2();
    yield 4;
}
function* gen2() {
    yield 2;
    yield 3;
}
var g = gen1();
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
// output:
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// {value: undefined, done: true}
