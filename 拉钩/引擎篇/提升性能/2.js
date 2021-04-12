function foo() {
    // 全局变量=> window.bar
    this.bar = '默认this指向全局';
    // 没有声明变量，实际上是全局变量=>window.bar
    bar = '全局变量'; 
}
foo();
console.log(foo);