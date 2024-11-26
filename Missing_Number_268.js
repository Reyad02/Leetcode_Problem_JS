/**
 * @param {number[]} nums
 * @return {number}
 */

/// Time --> O(n)
/// Space --> O(1)
var missingNumber = function (nums) {
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
  }
  const actualSum = (nums.length * (nums.length + 1)) / 2;
  return actualSum - sum;
};

const result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
console.log(result);
