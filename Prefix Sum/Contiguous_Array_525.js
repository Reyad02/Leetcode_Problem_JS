/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let res=0;
  let map = {0:-1}; 
  let sum = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      sum--; 
    } else {
      sum++; 
    }

    if (sum in map) { 
      res = Math.max(res, index - map[sum]);
      console.log(res);
    } else {
      map[sum] = index; 
    }
  }
  return res;
};

const nums = [0,1];
const res = findMaxLength(nums);
console.log(res);
