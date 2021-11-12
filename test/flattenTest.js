const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('return [1, 2, 3, 4] for [1, 2, 3, 4]', () => {
    assert.deepEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);
  });
  it('return ["Hello", "Lighthouse", "Labs"] for [["Hello"], "Lighthouse", "Labs"]', () => {
    assert.deepEqual(flatten([["Hello"], "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"]);
  });
  it('return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});