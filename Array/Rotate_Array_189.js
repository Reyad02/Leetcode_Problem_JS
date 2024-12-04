// var rotate = function (nums, k) {
//   let lengthOfForwardShiftedArray = k % nums.length;
//   let remainingArray = [];
//   let track;
//   if (lengthOfForwardShiftedArray === 0) {
//     return nums;
//   }
//   for (let i = 0; i < nums.length - lengthOfForwardShiftedArray; i++) {
//     remainingArray[i] = nums[i];
//     track = i;
//   }

//   for (let index = nums.length - 1; index > track; index--) {
//     remainingArray.unshift(nums[index]);
//   }
//   return remainingArray;
// };

// var rotate = function (nums, k) {
//   if (k === 0) {
//     return;
//   }

//   const temp = nums[nums.length - 1];
//   for (let index = nums.length - 1; index > 0; index--) {
//     nums[index] = nums[index - 1];
//   }
//   nums[0] = temp;

//   rotate(nums, k - 1);
// };

var rotate = function (nums, k) {
  k = k % nums.length;

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
  console.log(nums);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
