// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};


assertEqual(String(tail(["Hello", "Lighthouse", "Labs"])), String(["Lighthouse", "Labs"]));
assertEqual(String(tail([])), String([]));
assertEqual(String(tail([1,2,3,4])), String([2,3,4]));
assertEqual(String(tail([1])), String([]));

