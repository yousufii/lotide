const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
    }
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
