// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters

function nthFibonacciTerm(term) {
  if (term < 4) {
    return term <= 1 ? 0 : 1;
  }

  return nthFibonacciTerm(term - 1) + nthFibonacciTerm(term - 2);
}

function reverseFibonacci(nTerms) {
  const nFibonacciTerms = [];

  for (let reverseIndex = nTerms; reverseIndex > 0; reverseIndex--) {
    nFibonacciTerms[nFibonacciTerms.length] = nthFibonacciTerm(reverseIndex);
  }

  return nFibonacciTerms;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function prepareMessage(nTerm, actualSegment, expected) {
  const isTestPassing = areEqual(actualSegment, expected) ? "✅" : "❌";
  const messageSegment = isTestPassing + nTerm + " terms in fibonacci series";
  const expectedResult = " when reversed are " + " Expected : " + expected;

  return messageSegment + expectedResult + " actual: " + actualSegment;
}

function testReverseFibonacci(nTerms, expected) {
  const actualSegment = reverseFibonacci(nTerms);

  console.log(prepareMessage(nTerms, actualSegment, expected));
}

function testAll() {
  testReverseFibonacci(0, []);
  testReverseFibonacci(1, [0]);
  testReverseFibonacci(2, [1, 0]);
  testReverseFibonacci(3, [1, 1, 0]);
  testReverseFibonacci(4, [2, 1, 1, 0]);
  testReverseFibonacci(5, [3, 2, 1, 1, 0]);
  testReverseFibonacci(6, [5, 3, 2, 1, 1, 0]);
}

testAll();
