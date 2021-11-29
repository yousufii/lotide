const assertEqual = function(actual, expected) {
  let output = eqArrays(actual, expected);
  console.log(output);
  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${acctual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};



