function quotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
}

function prepareMessage(dividend, divisor, actualSegment, expected) {
  const isTestPassing = actualSegment === expected ? "👍" : "🥲";
  const messageSegment = isTestPassing + " quotient of " + dividend;
  const expectedResult = " and " + divisor + " is " + expected;

  return messageSegment + expectedResult + " and is " + actualSegment;
}

function testQuotient(dividend, divisor, expected) {
  const actualSegment = quotient(dividend, divisor);

  console.log(prepareMessage(dividend, divisor, actualSegment, expected));
}

function testAll() {
  
  testQuotient(0, 1, 0);
  testQuotient(1, 1, 1);
  testQuotient(1, 2, 0);
  testQuotient(2, 1, 2);
  testQuotient(2, 2, 1);
  testQuotient(3, 2, 1);
  testQuotient(10, 5, 2);
  testQuotient(24, 4, 6);
}

testAll();