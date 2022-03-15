var maxProfit = function(prices, fee) {
    let buy = prices[0] + fee; // 买入股票需要的金额以及交易的手续费
    let profit = 0; // 总收益
    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i] + fee ) { // 如果当前的股票买入金额 < 保存的买入金额的时候，替换买入金额
            buy = prices[i] + fee;
        } else if (buy < prices[i] ) {   // 如果当前股票金额 > 买入金额 + 手续费，先卖出
            profit += prices[i] - buy;  // 总收益 = 差值
            buy = prices[i];    // 这边是重点，买入金额要替换成当前的股票金额，这个不带手续费
        }
    }
    return profit;
};
let arr=[1, 3, 2, 8, 4, 9];fee=2
console.log(maxProfit(arr,fee))