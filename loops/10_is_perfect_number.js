
// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 496;
// Print true if a is a perfect number otherwise print false
// A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
// For example, 6 is a perfect number because its proper divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
// Printing more than one output or printing anything other than perfect or not perfect might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let PerfectNumberCandidate = a;
let sumOfFactors = 0;
let isPerfect = true;

if (PerfectNumberCandidate === 0) {
  isPerfect = false;
} else {
  for (let isFactor = 1; isFactor < a;) {
    if (PerfectNumberCandidate % isFactor === 0) {
      sumOfFactors = sumOfFactors + isFactor;
    }
    isFactor += 1;
  }
}

if (PerfectNumberCandidate === sumOfFactors) {
  console.log(isPerfect);
} else {
  console.log(false);
}
