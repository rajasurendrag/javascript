// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let secondLastTerm = 0;
let lastTerm = 1;

for (let numberOfTerms = 1; numberOfTerms < n; numberOfTerms++) {
    const nextTerm = secondLastTerm + lastTerm;
    secondLastTerm = lastTerm;
    lastTerm = nextTerm;
}

console.log(secondLastTerm);