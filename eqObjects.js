const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) return false;

  for (const key of key1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1)) {
      return eqArrays(value1, value2);
    }
    if (value1 !== value2) return false;
  }

  return true;
};

module.exports = eqObjects;
