const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('return [] when finding the middle of [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('return [] when finding the middle of [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('return [2, 3] when finding the middle of [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('return [3] when finding the middle of [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});