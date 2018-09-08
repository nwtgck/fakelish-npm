# fakelish

[![npm](https://img.shields.io/npm/v/fakelish.svg)](https://www.npmjs.com/package/fakelish)
 [![Build Status](https://travis-ci.com/nwtgck/fakelish-npm.svg?token=TuxNpqznwwyy7hyJwBVm&branch=develop)](https://travis-ci.com/nwtgck/fakelish-npm) [![Greenkeeper badge](https://badges.greenkeeper.io/nwtgck/fakelish-npm.svg)](https://greenkeeper.io/)

Fake English word generator

## Install

```bash
npm i -S fakelish
```

## Usage

Here is an usage of `fakelish`.  

```ts
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
```
(<https://runkit.com/nwtgck/5b92ba85f11fe20011ed3873>)


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