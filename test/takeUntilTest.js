const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('return [1, 2, 5, 7, 2] for data1 & this callback (x) => x < 0', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, (x) => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it('return results2, ["I\'ve", "been", "to", "Hollywood"] for data2 & this callback (x) => x === ","', () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, (x) => x === ",");
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
});