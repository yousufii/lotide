
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

const assertEqual = function(actual, expected) {
  let output = eqArrays(actual, expected);
  console.log(output);
  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

const middle = function(array) {
  let resultArray = [];
  const lengthOfArray = array.length;
  const midPos = Math.ceil((lengthOfArray) / 2 - 1);
  const midPos2 = Math.floor((lengthOfArray) / 2 + 1);

 
  if (array.length > 2) {
    for (let index = midPos; index < midPos2; index++) {
      resultArray.push(array[index]);
    }
  }
    
  return resultArray;

}
