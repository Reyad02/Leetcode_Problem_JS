// time --> 0(log3n)
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid1 = start + parseInt((end - start) / 3);
    let mid2 = end - parseInt((end - start) / 3);
    if (nums[mid1] === target) {
      return mid1;
    }
    if (nums[mid2] === target) {
      return mid2;
    }
    if (target < nums[mid1]) {
      end = mid1 - 1;
    } else if (target > nums[mid2]) {
      start = mid2 + 1;
    } else {
      start = mid1 + 1;
      end = mid2 - 1;
    }
  }
  return -1;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 50;
const res = search(nums, target);
console.log(res);
