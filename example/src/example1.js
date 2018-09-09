// Import fakelish
const fakelish = require("fakelish");

// Min and max Lengths of fake words
const minLen = 7;
const maxLen = 11;

(async ()=>{
  // Generate 20 fake words
  for(let i = 0; i < 20; i++) {
    // Generate a fake word
    const fakeWord = await fakelish.generateFakeWord(minLen, maxLen);
    // Print the capitalized fake word
    console.log(capitalize(fakeWord));
  }
})();

// Capitalize string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
