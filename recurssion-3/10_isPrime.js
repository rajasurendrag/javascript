function isPrime(number) {
  if (number < 2) {
    return false;
  }

  return isNumberNotHaveAFactor(number, 2);
}

function isNumberNotHaveAFactor(dividend, divisor) {

  if (divisor * divisor > dividend) {
    return true;
  }

  if (dividend % divisor === 0) {
    return false;
  }

  return isNumberNotHaveAFactor(dividend, divisor + 1);
}

function prepareMessage(number, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + "first prime above of " + number + " is";
  const expectedResult = " " + expected + " and is ";

  return messageSegment + expectedResult + actual;
}

function testHCF(number, expected) {
  const actual = isPrime(number);

  console.log(prepareMessage(number, actual, expected));
}

function testAll() {
  testHCF(0, false);
  testHCF(2, true);
  testHCF(3, true);
  testHCF(4, false);
  testHCF(11, true);
  testHCF(8, false);
  testHCF(25, false);
}

testAll();

