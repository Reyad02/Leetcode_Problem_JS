/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0
    for (let index = left; index <=right; index++) {
        sum=sum+this.nums[index];
    }
    return sum
};

var input = ["NumArray", "sumRange", "sumRange", "sumRange"]
var numInput = [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]

const numArr = new NumArray(numInput[0][0]);
let res = [null]
res.push(numArr.sumRange(0,2))
res.push(numArr.sumRange(2,5))
res.push(numArr.sumRange(0,5))
console.log(res);

