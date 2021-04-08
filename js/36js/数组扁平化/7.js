function flatten(arr) {
	return arr.reduce((res, next) => {
		return res.concat(next instanceof Array ? flatten(next) : next)
	}, [])
}
var arr=[1,2,[3,4,[5,6]]];
console.log(flatten(arr));// [ 1, 2, 3, 4, 5, 6 ]