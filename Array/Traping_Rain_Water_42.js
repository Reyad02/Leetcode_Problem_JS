/**
 * @param {number[]} height
 * @return {number}
 */

/// naive approach
/// Time --> O(n^2)
// var trap = function (height) {
//   let res = 0;

//   for (let i = 1; i < height.length - 1; i++) {
//     let left = height[i];
//     for (let j = 0; j < i; j++) {
//       left = Math.max(left, height[j]);
//     }

//     let right = height[i];
//     for (let k = i + 1; k < height.length; k++) {
//       right = Math.max(right, height[k]);
//     }

//     let waterHeight = Math.min(left, right) - height[i];
//     res = res + waterHeight;
//   }
//   return res;
// };

/// Time --> O(n)
/// Extra space
var trap = function (height) {
  let result = 0;
  let leftArr = [];
  let rightArr = [];

  leftArr[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    leftArr[i] = Math.max(height[i], leftArr[i - 1]);
  }

  rightArr[height.length - 1] = height[height.length - 1];
  for (let j = height.length - 2; j >= 0; j--) {
    rightArr[j] = Math.max(height[j], rightArr[j + 1]);
  }

  for (let k = 0; k < height.length; k++) {
    let waterLevel = Math.min(leftArr[k], rightArr[k]) - height[k];
    result += waterLevel;
  }

  return result;
};

const result = trap([4,2,0,3,2,5]);
console.log(result);
