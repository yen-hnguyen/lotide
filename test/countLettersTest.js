const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns 4 for letter 'n' in the string 'My name is Yen Nguyen'", () => {
    const result1 = countLetters("My name is Yen Nguyen");
    assert.strictEqual(result1["n"], 4);
  });
  it("returns undefined for letter 'o' in the string 'My name is Yen Nguyen'", () => {
    const result1 = countLetters("My name is Yen Nguyen");
    assert.strictEqual(result1["o"], undefined);
  });
});
