// 笔试链接
// https://note.youdao.com/ynoteshare/index.html?id=657775dd0eb1002be44d0b4f2447604e&type=note&_time=1649059615847

// 1
const loopString = (str) => {
  let i = 0
  const next = () => str[i++ % str.length]
  return next
}

// 2
const findFibber = num => {
  const nums = [1, 1]
  for (let i = 2; true; i++) {
    nums[i] = nums[i - 1] + nums[i - 2]
    if (nums[i] === num)
      return i
    else if (nums[i] > num)
      return -1
  }
}

// 3
const findParentDirectory = paths => {
  const strs = []
  let result = '/'
  paths.forEach(path => {
    strs.push(path.slice(1).split('/'))
  })
  return result === '/' ? null : result
}

// 勾股数



// 链式调用
const myCalculator = value => {
  return {
    value,
    getValue() {
      return this.value
    },
    add(num) {
      this.value += num
      return this
    },
    minus(num) {
      this.value -= num
      return this
    },
    multi(num) {
      this.value *= num
      return this
    },
    div(num) {
      this.value /= num
      return this
    }
  }
}


// 判断全等
const isEqual = (left,right) => {
  if(left === right) {
    return true
  } else {
    return Object.is(left,right)
  }
}


const deepClone = (orgin,weakmap) => {

}


const quickSort = () => {
  
}