const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it('return {Jason: 1} for the firstNames array and results1 object to count Jason: true', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
  ];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
  });
    assert.strictEqual(result1["Jason"], 1);
  });
  it('return undefined for the firstNames array and results1 object to count Karima: true', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
  ];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
  });
    assert.strictEqual(result1["Karima"], undefined);
  });
  it('return {Fang: 2} for the firstNames array and results1 object to count Fang: true', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
  ];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
  });
    assert.strictEqual(result1["Fang"], 2);
  });
  it('return undefined for the firstNames array and results1 object to count Agouhanna: false', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
  ];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
  });
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});


