/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function (nums, k) {
  let sum = nums[0];

  for (let i = 0; i < 1; i++) {
    let demoSum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (demoSum < demoSum + nums[j]) {
        demoSum = demoSum + nums[j];
        if (sum < demoSum) {
          sum = demoSum;
        }
      } else {
        demoSum=0
      }
    }
  }
  console.log(sum);
};

const nums = [1,-2,3,4];
const k = 2;
const res = maxSubarraySum(nums, k);
