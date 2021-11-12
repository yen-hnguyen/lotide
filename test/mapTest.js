const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it('return ["g", "c", "t", "m", "t"] when getting the first letter of each word in the words array', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, (word) => word[0]);
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
  it('[2, 4, 6, 8, 10] when multiple each number in numbers array by 2', () => {
    const numbers = [1, 2, 3, 4, 5];
    const results2 = map(numbers, number => number * 2);
    assert.deepEqual(results2, [2, 4, 6, 8, 10]);
  });
});
