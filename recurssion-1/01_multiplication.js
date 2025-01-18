function multiply(multiplier, multiplicand) {
  if (multiplier === 0) {
    return 0;
  }

  return multiplicand + multiply(multiplier - 1, multiplicand);
}

function prepareMessage(multiplier, multiplicand, actualSegment, expected) {
  const isTestPassing = actualSegment === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + " multiplication of " + multiplier;
  const expectedResult = " and " + multiplicand + " is " + expected;

  return messageSegment + expectedResult + " and is " + actualSegment;
}

function testMultiply(multiplier, multiplicand, expected) {
  const actual = multiply(multiplier, multiplicand);

  console.log(prepareMessage(multiplier, multiplicand, actual, expected));
}

function testAll() {
  testMultiply(0, 1, 0);
  testMultiply(1, 0, 0);
  testMultiply(1, 1, 1);
  testMultiply(1, 2, 2);
  testMultiply(2, 2, 4);
  testMultiply(3, 2, 6);
  testMultiply(4, 24, 96);
  testMultiply(5, 120, 600);
}

testAll();