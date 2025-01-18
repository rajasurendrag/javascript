// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 12;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let targetNumber = a;

for (let isFactor = 2; isFactor <= targetNumber;) {
  if (targetNumber % isFactor === 0) {
    console.log(isFactor);
    targetNumber = targetNumber / isFactor;
  } else {
    isFactor += 1;
  }
}