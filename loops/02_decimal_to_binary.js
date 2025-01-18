// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 12;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let decimalNumber = a;

if (decimalNumber != 0) {
  for (let decimalNumber = a; decimalNumber > 0;) {
    let binaryDigit = 0;
    binaryDigit = binaryDigit + (decimalNumber % 2);
    decimalNumber = (decimalNumber - binaryDigit) / 2;
    console.log(binaryDigit);
  }
} else {
  console.log(0);
}
