function nthFibonacciTerm(term) {
  if (term < 4) {
    return term <= 1 ? 0 : 1;
  }

  return nthFibonacciTerm(term - 1) + nthFibonacciTerm(term - 2);
}

function prepareMessage(number, actualSegment, expected) {
  const isTestPassing = actualSegment === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + number + " fibonacci term ";
  const expectedResult = "is " + expected;

  return messageSegment + expectedResult + " and is " + actualSegment;
}

function testNthFibonacciTerm(number, expected) {
  const actualSegment = nthFibonacciTerm(number);

  console.log(prepareMessage(number, actualSegment, expected));
}

function testAll() {
  testNthFibonacciTerm(0, 0);
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(6, 5);
  testNthFibonacciTerm(7, 8);
  testNthFibonacciTerm(20, 4181);
}

testAll();
