function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isPrime(primeCandidate, factor) {
  if (factor > primeCandidate ** .5) {
    return true;
  }

  if (isDivisible(primeCandidate, factor)) {
    return false;
  }

  return isPrime(primeCandidate, factor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return isPrime(primeCandidate, 2);
}

function prepareMessage(number, actualSegment, expected) {
  const isTestPassing = actualSegment === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + " is " + number + " prime";
  const expectedResult = " Expected : " + expected;

  return messageSegment + expectedResult + " actual:" + actualSegment;
}

function testIsPrime(number, expected) {
  const actualSegment = isPrime(number);

  console.log(prepareMessage(number, actualSegment, expected));
}

function testAll() {
  testIsPrime(0, false);
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(3, true);
  testIsPrime(4, false);
  testIsPrime(5, true);
  testIsPrime(6, false);
  testIsPrime(29, true);

}

testAll();
