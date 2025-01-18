function fibonacci(nTerms) {
  if (nTerms === 1) {
    return [0];
  }

  const nFibonacciTerms = [0, 1];

  for (let index = 2; index < nTerms; index++) {
    const term = nFibonacciTerms[index - 1] + nFibonacciTerms[index - 2];
    nFibonacciTerms[index] = term;
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
  const messageSegment = isTestPassing + nTerm + "terms in fibonacci series";
  const expectedResult = " are " + " Expected : " + expected;

  return messageSegment + expectedResult + " actual: " + actualSegment;
}

function testFibonacci(nTerms, expected) {
  const actualSegment = fibonacci(nTerms);

  console.log(prepareMessage(nTerms, actualSegment, expected));
}

function testAll() {
  testFibonacci(0, []);
  testFibonacci(1, [0]);
  testFibonacci(2, [0, 1]);
  testFibonacci(3, [0, 1, 1]);
  testFibonacci(4, [0, 1, 1, 2]);
  testFibonacci(5, [0, 1, 1, 2, 3]);
  testFibonacci(6, [0, 1, 1, 2, 3, 5]);
}

testAll();
