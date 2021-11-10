const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Code
assertEqual(String(tail(["Hello", "Lighthouse", "Labs"])), String(["Lighthouse", "Labs"]));
assertEqual(String(tail([])), String([]));
assertEqual(String(tail([1,2,3,4])), String([2,3,4]));
assertEqual(String(tail([1])), String([]));