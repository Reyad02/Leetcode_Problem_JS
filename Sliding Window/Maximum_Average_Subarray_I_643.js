/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  let maxSum = -Infinity;

  for (let index = 0; index < nums.length; index++) {
    sum = sum + nums[index];
    if (index >= k) {
      //   5  -  4
      sum = sum - nums[index - k];
    }

    // we k elements sum, when make sum of the first 4 number then you can Update maxSum 
    if (index >= k - 1) {
      maxSum = Math.max(sum, maxSum);
    }
  }

  return Number.parseFloat(maxSum / k);
};

const nums = [-5, -5];
const k = 1;

console.log(findMaxAverage(nums, k));
