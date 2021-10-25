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

const flatten = (array) => {
  const flattenArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let n of item) {
        flattenArray.push(n);
      }
    } else {
      flattenArray.push(item);
    }
  }
  return flattenArray;
};

flatten([1, 2, [3, 4], 5, [6]]);
flatten([[2, 4, 6], 1, [3, 5], [7], 8, 9, 10]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);