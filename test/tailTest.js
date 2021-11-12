const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('return [2, 3, 4] when getting everything except for the first element of [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it('return ["Lighthouse", "Labs"] when getting everything except for the first element of ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('return [] when getting everything except for the first element of []', () => {
    assert.deepEqual(tail([]), []);
  });
});