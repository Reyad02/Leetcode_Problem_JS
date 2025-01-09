/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// time --> 0(logn)
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    }
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 2;
const res = search(nums, target);
console.log(res);
