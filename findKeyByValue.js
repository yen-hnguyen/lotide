const findKeyByValue = function (object, value) {
  // loop through the object, find if given value matches any object value, return the key
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  // if we cannot find a match after looping through all the key, return undefined
  return undefined;
};

module.exports = findKeyByValue;
