function exponent(base, power) {
  if (power === 0) {
    return 1; 
  }

  return base * exponent(base, power - 1);
}

function prepareMessage(number1, number2, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + "HCF of " + number1 + " and ";
  const expectedResult = number2 + " is" + " " + expected + " and is ";

  return messageSegment + expectedResult + actual;
}

function testExponent(number1, number2, expected) {
  const actual = exponent(number1, number2);

  console.log(prepareMessage(number1, number2, actual, expected));
}

function testAll() {

  testExponent(1, 0, 1);
  testExponent(5, 0, 1);
  testExponent(1, 2, 1);
  testExponent(4, 2, 16);
  testExponent(-11, 2, 121);

}

testAll();