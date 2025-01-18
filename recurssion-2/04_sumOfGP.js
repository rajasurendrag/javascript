function sumOfGP(firstTerm, ratio, noOfTerms) {
  if (noOfTerms < 1) {
    return 0;
  }

  return firstTerm + sumOfGP(firstTerm * ratio, ratio, noOfTerms - 1);
}

function prepareMessage(a, r, n, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  let messageSegment = isTestPassing + "sum of " + n + " terms of GP with ";
  messageSegment += "first term " + a + " and common ratio " + r + " is ";
  const expectedResult = expected + " and is ";

  return messageSegment + expectedResult + actual;
}

function testSumOfGP(a, r, n, expected) {
  const actual = sumOfGP(a, r, n);

  console.log(prepareMessage(a, r, n, actual, expected));
}

function testAll() {
  testSumOfGP(1, 1, 2, 2);
  testSumOfGP(1, 1, 3, 3);
  testSumOfGP(1, 2, 3, 7);
  testSumOfGP(1, 2, 4, 15);
  testSumOfGP(2, 1, 3, 6);
  testSumOfGP(2, 3, 5, 242);
  testSumOfGP(3, 3, 2, 12);
  testSumOfGP(4, 3, 2, 16);
  testSumOfGP(2, -1, 3, 2);
  testSumOfGP(9, 2, 4, 135);
  testSumOfGP(-10, 8, 2, -90);
}

testAll();