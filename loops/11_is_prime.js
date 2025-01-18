// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 3;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const primeCandidate = a;
let noOfFactors = 0;

for (let testNumber = 2; testNumber <= primeCandidate; testNumber++ ) {
    if (primeCandidate % testNumber === 0) {
        noOfFactors += 1;
    }
}

let isPrime = (noOfFactors === 1);
console.log(isPrime);