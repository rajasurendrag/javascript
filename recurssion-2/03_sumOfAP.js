function sumOfAP(firstTerm, difference, noOfTerms) {
  if (noOfTerms < 1) {
    return 0;
  }

  return firstTerm + sumOfAP(firstTerm + difference, difference, noOfTerms - 1);
}

function prepareMessage(a, d, n, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  let messageSegment = isTestPassing + "sum of " + n + " terms of AP with ";
  messageSegment += "first term " + a + " and difference " + d + " is ";
  const expectedResult = expected + " and is ";

  return messageSegment + expectedResult + actual;
}

function testSumOfAP(a, d, n, expected) {
  const actual = sumOfAP(a, d, n);

  console.log(prepareMessage(a, d, n, actual, expected));
}

function testAll() {
  testSumOfAP(1, 1, 0, 0);
  testSumOfAP(1, 1, 3, 6);
  testSumOfAP(1, 2, 3, 9);
  testSumOfAP(1, 2, 4, 16);
  testSumOfAP(2, 1, 1, 2);
  testSumOfAP(2, 3, 5, 40);
  testSumOfAP(3, 3, 2, 9);
  testSumOfAP(4, 3, 2, 11);
  testSumOfAP(2, -1, 3, 3);
}

testAll();
