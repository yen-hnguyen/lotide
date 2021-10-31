// Test Function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function Implementation
const findKey = function (object, callback) {
  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
};

const object = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

assertEqual(
  findKey(object, (x) => x.stars === 3),
  "Akaleri"
);

assertEqual(
  findKey(object, (x) => x.stars === 2),
  "noma"
);

assertEqual(
  findKey(object, (x) => x.stars === 2),
  "Ora"
);
