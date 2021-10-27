// assertEqual function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArray function
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

// Function Implementation
// eqObjects take in two objects and return true of false, base on the perfect match
const eqObjects = function (object1, object2) {
  // assign keys of object1 & object2 to variable key1 & key2
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);

  // check if object1 has the same numbers of keys to object2. Return false if it's not
  if (key1.length !== key2.length) {
    return false;
  } else {
    // Looping through key1 array
    for (const key of key1) {
      //check if any key is an array
      if (Array.isArray(object1[key])) {
        // pass the 2 objects to equalArays, return false if eqArray fails
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        } else {
          // if it's true, we will continue to check for another set of array if any
          continue;
        }
        //if none, the program will check primitive values
      } else {
        // check the key value pairs matches, if yes, continue with the loop
        if (object1[key] === object2[key]) {
          continue;
        } else {
          // if it doesn't match, return false
          return false;
        }
      }
    }
    // if it's pass all the checks without return false, the program will return true
    return true;
  }
};

// Primitives As Values (Test)
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cba = { c: "3", a: "1", b: "4" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), true);
assertEqual(eqObjects(cba, abc), true);
assertEqual(eqObjects(abc, cba), false);

// Arrays As Values (Test)
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

//console.log(eqArrays(dc["d"], cd["d"]));

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true);
