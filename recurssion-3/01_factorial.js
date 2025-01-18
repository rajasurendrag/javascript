function factorial(term) {
  if (term < 2) {
    return 1;
  }

  return term * factorial(term - 1)
} 

function prepareMessage(number, actualSegment, expected) {
  const isTestPassing = actualSegment === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + " factorial of " + number + " is ";
  const expectedResult = " Expected : " + expected;

  return messageSegment + expectedResult + " actual:" + actualSegment;
}

function testFactorial(number, expected) {
  const actualSegment = factorial(number);

  console.log(prepareMessage(number, actualSegment, expected));
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
  testFactorial(5, 120);

}

testAll();