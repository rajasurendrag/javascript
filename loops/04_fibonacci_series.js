// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let secondLast = 0;
let lastTerm = 1;

if (n == 1) {
  console.log(secondLast);
} else {
  console.log(secondLast);
  console.log(lastTerm);
  for (let counter = n - 2; counter > 0; counter--) {
    let nextTerm = secondLast + lastTerm;
    console.log(nextTerm);
    secondLast = lastTerm;
    lastTerm = nextTerm;
  }

}