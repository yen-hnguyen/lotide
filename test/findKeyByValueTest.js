const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns 'drama' when looking for 'The Wire' in the bestTVShowsByGenre object", () => {
    const bestTVShowsByGenre = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"};
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined when looking for 'That '70s Show' in the bestTVShowsByGenre object", () => {
    const bestTVShowsByGenre = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"};
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});