/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let res = [];
  coins.sort((a, b) => a - b);
  for (i = coins.length - 1; i >= 0; i--) {
    while (amount >= coins[i]) {
      res.push(coins[i]);
      amount = amount - coins[i];
    }
  }
  if (amount !== 0) {
    return -1;
  }

  return res.length;
};

const coins = [186,419,83,408];
const amount = 6249;
const result = coinChange(coins, amount);
console.log(result);
