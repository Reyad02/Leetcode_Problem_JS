/**
 * @param {number[]} nums
 * @return {number}
 */

/// naive approch
// Time-- > O(n^2);

// var maxProduct = function (nums) {
//   let product = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     let multiplier = 1;
//     for (let j = i + 1; j < nums.length; j++) {
//       multiplier *= nums[j];
//       product = Math.max(product, multiplier);
//     }
//   }
//   return product;
// };

// Time --> O(n)
var maxProduct = function (nums) {
  let prefix = 1;
  let suffix = 1;
  let res = Number.NEGATIVE_INFINITY;
  for (let index = 0; index < nums.length; index++) {
    if (prefix === 0) {
      prefix = 1;
    }
    if (suffix === 0) {
      suffix = 1;
    }
    prefix = prefix * nums[index];
    suffix = suffix * nums[nums.length - index - 1];
    res = Math.max(res, Math.max(prefix, suffix));
  }
  return res;
};

const result = maxProduct([-2, 0, -1]);
console.log(result);

