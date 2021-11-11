const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // check if the item is in the given object
    if (itemsToCount[item]) {
      // Increment the count of each item into results object
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
