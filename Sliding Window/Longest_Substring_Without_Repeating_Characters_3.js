/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (res.has(s[right])) {
      res.delete(s[left]);
      left++;
    }
    res.add(s[right]);
    maxLen = Math.max(maxLen, res.size);
  }
  return maxLen;
};

const s = "abcabcbb";

console.log(lengthOfLongestSubstring(s));
