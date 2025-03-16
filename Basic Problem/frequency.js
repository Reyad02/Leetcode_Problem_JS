const arr = [1, 1, 2, 3, 1, 4];
const frequency = {};
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (frequency[element]) {
    frequency[element] += 1;
  } else {
    frequency[element] = 1;
  }
}

console.log(frequency);


const words = ["apple", "banana", "apple", "orange", "banana", "banana"];
const wordFrequency = {}

for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (wordFrequency[element]) {
    wordFrequency[element] += 1;
  } else {
    wordFrequency[element] = 1;
  }
}

console.log(wordFrequency);