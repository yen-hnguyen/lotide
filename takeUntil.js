const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
  return array; // return the array if the entire array meet the callback truthy value
};

module.exports = takeUntil;
