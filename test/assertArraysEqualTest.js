const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["Yen", "Jackie"], ["Yen"]);
assertArraysEqual(["Yen", "Jackie", "Luna", "Ellie"], ["Yen", "Jackie", "Luna", "Elie"]);