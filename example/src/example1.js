// Import fakelish
const fakelish = require("fakelish");

// Lengths of fake words should be between minLen and maxLen
const minLen = 4;
const maxLen = 7;

(async ()=>{
  // Generate 20 fake words
  for(let i = 0; i < 20; i++) {
    // Generate a fake word
    const fakeWord = await fakelish.generateFakeWordByMinMaxLength(minLen, maxLen);
    // Print the capitalized fake word
    console.log(capitalize(fakeWord));
  }
})();

// Capitalize string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
