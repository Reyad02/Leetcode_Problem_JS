/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sum = 0;
  let map = { 0: 1 };  /// sum : frequency
  let count =0

  for (let index = 0; index < nums.length; index++) {
    sum = sum + nums[index];

    if((sum-k) in map){
      count=count+map[sum-k]
    }

    if(sum in map){
      map[sum]++;
    }else{
      map[sum]=1
    }
   
  }

  return count;
};

const nums = [1, 1, 1];
const k = 2;
console.log(subarraySum(nums, k));
