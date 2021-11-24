const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
    }
  }
};
const tail = function(array) {
  array = array.slice(1);
  return array;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);