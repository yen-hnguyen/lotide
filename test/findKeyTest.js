const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  it('return "Akaleri" when finding first key that has 3 stars ', () => {
    const object = {
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };
    assert.strictEqual(findKey(object, x => x.stars === 3), 'Akaleri');
  });
  it('return "noma" when finding first key that has 2 starss ', () => {
    const object = {
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };
    assert.strictEqual(findKey(object, x => x.stars === 2), 'noma');
  });
});
