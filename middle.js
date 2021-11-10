const middle = (array) => {
  let middleItems = [];
  if (array.length <= 2) {
    return middleItems; // return an empty string if the array length is less than 2
  } else if (array.length % 2 !== 0) {
    middleItems.push(array[(array.length - 1) / 2]); // array length is an odd num, get the middle number index by minus 1 then divide by 2
  } else if (array.length % 2 === 0) {
    middleItems.push(array[array.length / 2 - 1]); // array length is an even num, add the 2 number index in the middle
    middleItems.push(array[array.length / 2]);
  }
  return middleItems;
};

module.exports = middle;
