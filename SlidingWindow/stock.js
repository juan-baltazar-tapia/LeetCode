// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Have two pointers, 0, 1
// If they don't make a profit, move both by one
// If they make proit, update profit. Move R by one
 
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let r = 1;
    let profit = 0;
    while (r < prices.length){
        if (prices[l] < prices[r]){
            profit = Math.max(profit, prices[r] - prices[l])
            r += 1;
        } else {
            l = r;
            r += 1;
        }
    }
    return profit;
};
console.log(maxProfit([7,1,5,3,6,4])) //5
console.log(maxProfit([7,6,4,3,1])) //0
console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9])) //9