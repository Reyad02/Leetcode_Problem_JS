/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = 0;
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    totalSum += nums[index];
  }

  for (let index = 0; index < nums.length; index++) {
    let element = totalSum - sum - nums[index];
    if (element === sum) {
      return index;
    }
    sum += nums[index];
  }

  return -1;
};

const result = pivotIndex([1, 7, 3, 6, 5, 6]);
console.log(result);
