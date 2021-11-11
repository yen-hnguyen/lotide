const eqObjects = require('./eqObjects');

// Implement assertObjectEqual function
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
    return false;
  } else {
    console.log(
      `❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
    return true;
  }
};

module.exports = assertObjectsEqual;
