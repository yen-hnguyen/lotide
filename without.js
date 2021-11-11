const without = (sourceArray, itemToRemove) => {
  let resultArray = [];
  for (let item of sourceArray) {
    if (!itemToRemove.includes(item)) {
      resultArray.push(item);
    }
  }
  return resultArray;
};

module.exports = without;