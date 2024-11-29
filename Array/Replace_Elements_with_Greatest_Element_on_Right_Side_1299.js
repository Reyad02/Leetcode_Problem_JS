/**
 * @param {number[]} nums
 * @return {number}
 */

/// Find out only the leader

// var leadersElements = function (nums) {
//   let topper = nums[nums.length - 1];
//   let leaderArr = [topper];
//   for (let index = nums.length - 2; index >= 0; index--) {
//     if (topper < nums[index]) {
//       topper = nums[index];
//       leaderArr.unshift(topper);
//     }
//   }
//   return leaderArr;
// };

/// replacement of the leader

var leadersElements = function (nums) {
  let topper = nums[nums.length - 1];
  let leaderArr = [-1];
  for (let index = nums.length - 2; index >= 0; index--) {
    leaderArr.unshift(topper);
    if (topper < nums[index]) {
      topper = nums[index];
    }
  }
  return leaderArr;
};

const result = leadersElements([17, 18, 5, 4, 6, 1]);
console.log(result);
