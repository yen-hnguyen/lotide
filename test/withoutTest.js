const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('return ["hello", "lighthouse"] for ["hello", "world", "lighthouse"], ["world"]', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["world"]), ["hello", "lighthouse"]);
  });
  it('return [2, 3] for ([1, 2, 3], [1])', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('return [1, 2, 3] for ([1, 2, 3], [])', () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });
});