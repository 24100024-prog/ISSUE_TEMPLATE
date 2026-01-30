const natural = require("natural");

const tokenizer = new natural.WordTokenizer();

function analyzeSentiment(text) {
  const tokens = tokenizer.tokenize(text);
  return tokens;
}

module.exports = analyzeSentiment;
