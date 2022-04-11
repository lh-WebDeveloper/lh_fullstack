// 求质数数量
// function countPrimes( n ) {
//     if(n<=1){
//         return 0
//     }
//     var m = 0; //m为0的代表是质数
//             for (var j = 2; j < i; j++) {
//                 if (i % j == 0) {
//                     m = 1; //m为1的代表是非质数
//                     break;
//             }
//     }
// }
// console.log(countPrimes(10))
function zhishu(n) {
    var str = "", n = 0;
    for (var i = 1; i <= 10; i++) {
        var m = 0; //m为0的代表是质数
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                m = 1; //m为1的代表是非质数
                break;
            }
        }
        if (m == 0 && i != 1) {//排除1，因为1不是质数，但是2是质数
            str = str + i + "，";
            n++; //质数个数+1
        }
    }
    console.log("1-10间的质数总数为：" + n + " 个");
    console.log("1-10间的质数分别为：" + str.substr(0, str.length - 1));
}
zhishu();
