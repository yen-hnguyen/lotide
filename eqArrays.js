// function to check the 2 values if they match
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function to check if the 2 arrays are perfect match
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true)
assertEqual(eqArrays(["Yen", "Jackie"], ["Yen"]), false)
assertEqual(eqArrays(["Yen", "Jackie", "Luna", "Ellie"], ["Yen", "Jackie", "Luna", "Elie"]), true)




