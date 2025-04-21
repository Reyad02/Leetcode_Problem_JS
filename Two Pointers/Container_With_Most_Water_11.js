/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let amount = 0;
  let minHeight = 0;

  while (left < right) {
    minHeight = Math.min(height[left], height[right]);
    amount = Math.max(amount, minHeight * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return amount
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
