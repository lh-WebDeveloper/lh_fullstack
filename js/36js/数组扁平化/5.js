//拓展运算符方法,用于取出参数对象的所有可遍历属性，拷贝到当前对象之中，可以递归扁平化数组
function flatten(arr) {
	while(arr.some(item => Array.isArray(item))) {
		arr = [].concat(...arr);
	}
	return arr;
}
var arr=[1,2,[3,4,[5,6]]];
console.log(flatten(arr));// [ 1, 2, 3, 4, 5, 6 ]