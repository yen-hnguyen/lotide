const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true)
assertEqual(eqArrays(["Yen", "Jackie"], ["Yen"]), false)
assertEqual(eqArrays(["Yen", "Jackie", "Luna", "Ellie"], ["Yen", "Jackie", "Luna", "Elie"]), true)