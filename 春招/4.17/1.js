// function formateNumber(number) {
//     // 补全代码
//     var flag = number < 0 ? true : false;
//     var strs = Math.abs(number).toString().split("");
//     var result = [];
//     var index = 0;
//     for (var i = strs.length - 1; i >= 0; i--) {
//       if (index === 3) {
//         result.push(",");
//         index = 0;
//       }
//       result.push(strs[i]);
//       index++;
//     }
//     return flag ? "-" + result.reverse().join("") : result.reverse().join("");
//   }

const str= 'https://www.baidu.con'
console.log(str.replace(/.+(?=(\/\/))/g,))

// 正则
function formateNumber (number) {
    const reg = /\d{1,3}(?=(\d{3})+$)/g;
    const [intNum,floatNum] = number.toString().split(".")
    return intNum.replace(reg,"$&,")+'.'+floatNum
}





