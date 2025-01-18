function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

function prepareMessage(dividend, divisor, actualSegment, expected) {
  const isTestPassing = actualSegment === expected ? "👍" : "🥲";
  const messageSegment = isTestPassing + " remainder when " + dividend;
  const expectedResult = " is divided by  " + divisor + " is " + expected;

  return messageSegment + expectedResult + " and is " + actualSegment;
}

function testRemainder(dividend, divisor, expected) {
  const actualSegment = remainder(dividend, divisor);

  console.log(prepareMessage(dividend, divisor, actualSegment, expected));
}

function testAll() {
  testRemainder(0, 1, 0);
  testRemainder(1, 1, 0);
  testRemainder(1, 2, 1);
  testRemainder(2, 1, 0);
  testRemainder(2, 2, 0);
  testRemainder(3, 2, 1);
  testRemainder(12, 5, 2);
  testRemainder(26, 4, 2);
}

testAll();