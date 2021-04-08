Array.prototype.flatten = function () {
    var resultArr = [];
    var len = this.length;
    for (var i = 0; i < len; i ++) {
      if (Array.isArray(this[i])) {
          resultArr = resultArr.concat(this[i].flatten());
      } else {
        resultArr.push(this[i]);
      }
    }
    return resultArr;
  }
  var arr=[1,2,3,[4,5,'hello',['world',9,666]]]
  console.log(arr.flatten())//[1, 2, 3, 4, 5, "hello", "world", 9, 666]
  1234567891011121314
  