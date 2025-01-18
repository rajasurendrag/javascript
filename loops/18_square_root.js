// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 4;
// Print the square root of a
// Printing more than one output or printing anything other than square root might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let rootValue = 0;
let squarevalue = a;

for (let oddSubtracter = 1; oddSubtracter <= squarevalue; oddSubtracter += 2) {
    squarevalue = squarevalue - oddSubtracter;
    rootValue = rootValue + 1;
}

console.log(rootValue);