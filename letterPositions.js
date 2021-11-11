const letterPositions = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (result[sentence[i]] === undefined) {
        // check to see if the key already in the result
        result[sentence[i]] = []; // since it's not, create an empty array for the key
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]].push(i);
      }
    }
  }
  return result;
};

module.exports = letterPositions;