function logarithm(number, base) {
  if (number <= 1) {
    return 0;
  }

  return 1 + logarithm(number / base, base);
}

function prepareMessage(number, base, actualSegment, expected) {
  const isTestPassing = actualSegment === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + " logarithm of " + number + " to ";
  const expectedResult = base + " is" + " Expected : " + expected;

  return messageSegment + expectedResult + " actual:" + actualSegment;
}

function testlogarithm(number, base, expected) {
  const actualSegment = logarithm(number, base);

  console.log(prepareMessage(number, base, actualSegment, expected));
}

function testAll() {
  testlogarithm(0, 0, 0);
  testlogarithm(2, 10, 1);
  testlogarithm(1, 10, 0);
  testlogarithm(4, 10, 1);
  testlogarithm(11,10, 2);
  testlogarithm(80, 10, 2);
  testlogarithm(200, 10, 3);
  testlogarithm(7, 10, 1);

}

testAll(); 