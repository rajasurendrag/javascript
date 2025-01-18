/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function nthFibonacciTerm(nthTerm) {
  let currentTerm = 0;
  let nextTerm = 1;

  for (let term = 1; term < nthTerm; term++) {
    const futureTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = futureTerm;
  }

  return currentTerm;
}

function prepareMessage(number, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + number + " term is " + actual;
  const expectedResult = " expected : " + expected;
  return messageSegment + expectedResult;
}

function testnthFibonacciTerm(number, expected) {
  const actual = nthFibonacciTerm(number);
  console.log(prepareMessage(number, actual, expected));
}

function testAll() {
  testnthFibonacciTerm(0, 0);
  testnthFibonacciTerm(1, 0);
  testnthFibonacciTerm(2, 1);
  testnthFibonacciTerm(3, 1);
  testnthFibonacciTerm(4, 2);
  testnthFibonacciTerm(5, 3);
}

testAll();
// to be uploaded
