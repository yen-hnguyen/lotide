const eqArrays = require('./eqArrays');

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
    for (const key of key1) {
      if (Array.isArray(object1[key])) {
        // pass them to eqArrays function
        return eqArrays(object1[key], object2[key]);
      }
      // check if the values match
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObjects;
