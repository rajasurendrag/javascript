function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  if (isPrime(number + 1, 2)) {
    return number + 1;
  }

  return firstPrimeAbove(number + 1);
}

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

function prepareMessage(number, actualSegment, expected) {
  const isTestPassing = actualSegment === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + " next prime of " + number + " is ";
  const expectedResult = " Expected : " + expected;

  return messageSegment + expectedResult + " actual:" + actualSegment;
}

function testFirstPrimeAbove(number, expected) {
  const actualSegment = firstPrimeAbove(number);

  console.log(prepareMessage(number, actualSegment, expected));
}

function testAll() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(4, 5);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(6, 7);
  testFirstPrimeAbove(29, 31);
  testFirstPrimeAbove(90, 97);
}

testAll();
