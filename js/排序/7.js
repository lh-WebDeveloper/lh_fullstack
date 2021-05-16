// 计数排序
let array = [3, 2, 1, 2, 3, 2, 0, 4]
let counts = []
for (let v of array) {
  counts[v] = (counts[v] || 0) + 1
}
//console.log(counts) // [1, 1, 3, 2, 1]
let result = []
for (let i = 0; i < counts.length; i++) {
  let count = counts[i]
  while(count > 0) {
    result.push(i)
    count--
  }
}
console.log(result) // [0, 1, 2, 2, 2, 3, 3, 4]

