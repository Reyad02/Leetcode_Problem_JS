// Naive Approach
// Time complexity O(n^2)
// Space complexity O(1)

// var maxSubArray = function (nums) {
//   let maxSum = nums[0];
//   let fIndex = 0;
//   let lIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum = sum + nums[j];

//       if (maxSum < sum) {
//         maxSum = sum;
//         fIndex = i;
//         lIndex = j;
//       }
//     }
//   }
//   return { maxSum, fIndex, lIndex };
// };

// const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// console.log(result);

// Kadane’s Algorithm
// Time complexity O(n^2)
// Space complexity O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let maxEnding = nums[0];
  let start = 0;
  let tempStart = 0;
  let end = 0;

  // maxEnding = Math.max(maxEnding + nums[i], nums[i]);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxEnding + nums[i]) {
      maxEnding = nums[i];
      tempStart = i;
    } else {
      maxEnding = maxEnding + nums[i];
    }

    // maxSum = Math.max(maxEnding, maxSum);

    if (maxEnding > maxSum) {
      maxSum = maxEnding;
      start = tempStart;
      end = i;
    }
  }
  return { maxSum, start, end };
};

const result = maxSubArray([5, 4, -1, 7, 8]);
console.log(result);
