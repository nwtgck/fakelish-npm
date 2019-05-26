# fakelish

[![npm](https://img.shields.io/npm/v/fakelish.svg)](https://www.npmjs.com/package/fakelish)
 [![Build Status](https://travis-ci.com/nwtgck/fakelish-npm.svg?token=TuxNpqznwwyy7hyJwBVm&branch=develop)](https://travis-ci.com/nwtgck/fakelish-npm)

Fake English word generator

## Install

```bash
npm i -S fakelish
```

## Usage

Here is an usage in JavaScript.

```js
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
```
([example/src/example1.js](example/src/example1.js))


The output should be like the following.

```
Schyperant
Imposillack
Tioughters
Schgruids
Viestios
Mundrial
Unkalphast
Mireock
Babrilly
Formalated
Gimbrawer
Trident
Compler
Ligical
Deprene
Ocoarriete
Raxalluffic
Pecties
Daeorhons
Herbalve
```
