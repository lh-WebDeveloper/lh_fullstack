var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
function getArrMaxRepetData(arr) {
	const obj = {}
	const newObj = {
		max: 0,
		key: 0
	}
	for(let i = 0; i < arr.length; i++) {
		obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
	}
	for(const i in obj) {
		if(obj[i] > newObj.max) {
			newObj.max = obj[i]
			newObj.key = i
		}
	}
	return newObj
}
console.log(getArrMaxRepetData(names))  // {key: "Alice"max: 2}
