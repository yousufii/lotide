const assertEqual = function(actual, expected) {
  let output = eqArrays(actual, expected);
  console.log(output);
  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};


const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};


const letterPositions = function(sentence) {
  const thisObj = {};
  for (let i = 0; i < sentence.length; i++) {
    let mySent = sentence[i];
    if (mySent !== " ") {
      if (thisObj[mySent]) {
        thisObj[mySent].push[i];
      } else {
        thisObj [mySent] = [i];
      }
 
    }
 
  }
  return thisObj;
};
assertArraysEqual(letterPositions("hello").e, [1]);


