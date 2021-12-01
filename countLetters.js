const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
    }
  }
};


const countLetters = function(inputString) {
  const countResults = {};
  for (const input of inputString) {
    if (countResults[input]) {
      countResults[input] += 1;
    } else {
      if (input !== " ") {
        countResults[input] = 1;
      }
    }
  }
  return countResults;
};

console.log(countLetters("L H L"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("   "));

console.log(assertEqual((countLetters("LHL"))["L"], 2));
console.log(assertEqual((countLetters("LHL"))["H"], 1));