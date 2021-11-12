const middle = (array) => {
  const arrLength = array.length;
  const middleItems = [];
  let middleIndex = arrLength / 2;

  if (arrLength <= 2) return middleItems;

  if (arrLength % 2 !== 0) {
    middleItems.push(array[Math.floor(middleIndex)]);
  } else if (arrLength % 2 === 0) {
    middleItems.push(array[middleIndex - 1]);
    middleItems.push(array[middleIndex]);
  }
  
  return middleItems;
};

module.exports = middle;
