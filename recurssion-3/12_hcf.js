function HCF(number1, number2) {
  if (number1 === 0) {
    return number2;
  } 

  return HCF(number1 % number2, number1);
}

function prepareMessage(number1, number2, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + "HCF of " + number1 + " and ";
  const expectedResult = number2 + " is" + " " + expected + " and is ";
  
  return messageSegment + expectedResult + actual;
}

function testlogarithm(number1, number2, expected) {
  const actual = HCF(number1, number2);
  
  console.log(prepareMessage(number1, number2, actual, expected));
}

function testAll() {
  testlogarithm(0, 0, 0);
  testlogarithm(2, 0, 0);
  testlogarithm(1, 2, 1);
  testlogarithm(4, 2, 2);
  testlogarithm(11, 121, 11);
  testlogarithm(8, 24, 8);
  testlogarithm(29, 7, 1);
  testlogarithm(7, 29, 1);

}

// testAll();
