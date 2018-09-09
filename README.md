# fakelish

[![npm](https://img.shields.io/npm/v/fakelish.svg)](https://www.npmjs.com/package/fakelish)
 [![Build Status](https://travis-ci.com/nwtgck/fakelish-npm.svg?token=TuxNpqznwwyy7hyJwBVm&branch=develop)](https://travis-ci.com/nwtgck/fakelish-npm) [![Greenkeeper badge](https://badges.greenkeeper.io/nwtgck/fakelish-npm.svg)](https://greenkeeper.io/)

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

(async ()=>{
  // Generate 20 fake words
  for(let i = 0; i < 20; i++) {
    // Generate a fake word
    const fakeWord = await fakelish.generateFakeWord();
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
Vess
Catong
Pinh
Edia
Verfesh
Perigl
Chal
Pulane
Kigoxe
Oion
Soth
Anke
Mans
Wophecc
Blingy
Euste
Abitin
...
```