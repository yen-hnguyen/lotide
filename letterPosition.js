// assertArrayequal for testing
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

// assertEqual and eqArrays function for testing
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } else {
        continue;
      }
    }
    return true;
  }
};

// Actual fucntion
const letterPositions = function (sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (result[sentence[i]] === undefined) {
        // check to see if the key already in the result
        result[sentence[i]] = []; // since it's not, create an empty array for the key
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]].push(i);
      }
    }
  }
  return result;
};

//Test Code

assertEqual(eqArrays(letterPositions("lighthouselabs")["l"], [0, 10]), true);
assertEqual(eqArrays(letterPositions("Javascript")["a"], [2, 2]), true);

assertArraysEqual(letterPositions("hello"), {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4],
});
assertArraysEqual(letterPositions("Winter is coming")["i"], [1, 7, 13]);
assertArraysEqual(letterPositions("Winter is coming")["n"], [2]);
