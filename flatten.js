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

module.exports = flatten;