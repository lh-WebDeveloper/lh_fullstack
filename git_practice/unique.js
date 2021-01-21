//数组去重
const unique = (arr) => {
        //1. 伪数组 nodeList
        //2. Set
        //return  Array.from(new Set(arr))
	return [...new Set(arr)];
}

console.log(unique([1,2,2,3]))

