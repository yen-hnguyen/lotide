// assertEqual function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKeyByValue function

const findKeyByValue = function (object, value) {
  // loop through the object, find if given value matches any object value, return the key
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  // if we cannot find a match after looping through all the key, return undefined
  return undefined;
};

// Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Friend"), "sitcom");
