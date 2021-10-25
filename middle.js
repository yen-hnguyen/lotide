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

const middle = (array) => {
  const middleItems = [];
  if (array.length <= 2) {
    console.log(middleItems);
    return middleItems; // return an empty string if the array length is less than 2
  } else if (array.length % 2 !== 0) {
    middleItems.push(array[(array.length - 1) / 2]); // array length is an odd num, get the middle number index by minus 1 then divide by 2
  } else if (array.length % 2 === 0) {
    middleItems.push(array[array.length / 2 - 1]); // array length is an even num, add the 2 number index in the middle
    middleItems.push(array[array.length / 2]);
  }
  console.log(middleItems);
  return middleItems;
};

middle([1]);
middle([1, 2]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5]);

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
