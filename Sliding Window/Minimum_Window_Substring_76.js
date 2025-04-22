/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */



/// https://www.youtube.com/watch?v=yGZcsPMuaNE   -->   Solve



var minWindow = function (s, t) {
  let sLen = s.length;
  let tLen = t.length;
  let map = {};

  for (let index = 0; index < t.length; index++) {
    if (map[t[index]]) {
      map[t[index]]++;
    } else {
      map[t[index]] = 1;
    }
  }

  let counter = 0,
    left = 0,
    right = 0,
    startIndex = -1,
    minStrLen = Number.MAX_VALUE;

  while (right < sLen) {
    if (map[s[right]] > 0) {
      counter++;
    }
    map[s[right]]--;
    right++;

    while (tLen === counter) {
      if (right - left < minStrLen) {
        minStrLen = right - left;
        startIndex = left;
      }

      map[s[left]]++;
      if (map[s[left]] > 0) {
        counter--;
      }
      left++;
    }
  }

  return startIndex===-1?"":s.substring(startIndex, startIndex+minStrLen)
};

const s = "a";
const t = "aa";

console.log(minWindow(s, t));
