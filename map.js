// Test Function assertArrayEqual
const assertArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
        return false;
      } else {
        continue;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [10, 9, 7, 5, 4, 2, 1];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test Code
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["r", "o", "o", "a", "o"]);

const results2 = map(words, (word) => word[1]);
assertArraysEqual(results2, ["r", "o", "o", "a", "o"]);

const results3 = map(numbers, (number) => number % 2 === 0);
assertArraysEqual(results3, [10, 4, 2]);

const results4 = map(numbers, (number) => number % 2 === 0);
assertArraysEqual(results4, [9, 7, 5, 1]);
