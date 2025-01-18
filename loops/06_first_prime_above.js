// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 0;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let primeCandidate = (a < 2) ? 2 : a;
let primeChecker = 2;

while (primeCandidate > 0) {
    // if (primeCandidate === 1) {
    //     primeCandidate = primeCandidate + 1;
    // }
    let noOfFactors = 0;
    while (primeChecker < primeCandidate) {
        if (primeCandidate % primeChecker === 0) {
            noOfFactors = noOfFactors + 1;
        }
        primeChecker = primeChecker + 1;
    }

    if (noOfFactors === 0) {
        console.log(primeCandidate);
        break;
    }

    primeChecker = 2;
    primeCandidate = primeCandidate + 1;
}