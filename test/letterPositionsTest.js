const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('return [0, 10] for letter "l" in "lighthouselabs"', () => {
    const result1 = letterPositions("lighthouselabs");
    assert.deepEqual(result1["l"], [0, 10]);
  });
  it('return [1, 7, 13] for letter "i" for "Winter is coming"', () => {
    const result1 = letterPositions("Winter is coming");
    assert.deepEqual(result1["i"], [1, 7, 13]);
  });
  it('return {h: [0], e: [1],l: [2, 3], o: [4]} for "hello"', () => {
    const result1 = letterPositions("hello");
    assert.deepEqual(result1, {h: [0], e: [1],l: [2, 3], o: [4]});
  });
  it('return undefined for letter " " for "Lighthouse Labs"', () => {
    const result1 = letterPositions("Lighthouse Labs");
    assert.deepEqual(result1[" "], undefined);
  });
});