// Do not rename a and b, use them as input for your program.
// a and b will be natural numbers.
// While testing we will change their values.
const a = 12;
const b = 18;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let HCF = 0;
let numberOne = a;
let numberTwo = b;
if (numberOne != 0 && numberTwo != 0) {
  for (let counter = 1; counter <= numberTwo; counter++) {
    if (numberOne % counter == 0 && numberTwo % counter == 0) {
      HCF = counter;
    } else {
      HCF = numberOne;
    }
  }
} else {
  HCF = numberTwo;
}
console.log(HCF);
