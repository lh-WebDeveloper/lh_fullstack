var maxProfit = function(prices) {
    let profit=0;
    let min=prices[0];
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min){
            min=prices[i]
        }else if(prices[i]-min>profit){
            profit=prices[i]-min
        }
    }
    return profit
};
let arr=[2,4,5,3,6,4];
console.log(maxProfit(arr))