// Function Implementation
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function take in a sentence as a string, then return a count of each of the letter in that sentence

const countLetters = function (sentence) {
  const result = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const result1 = countLetters("My name is Yen Nguyen");

assertEqual(result1["n"], 3);
assertEqual(result1["y"], 1);
assertEqual(result1["o"], undefined);
