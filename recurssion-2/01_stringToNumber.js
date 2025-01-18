function stringToNumberConverter(string, index, number) {
  if (index === string.length) {
    return string[0] === "-" ? number * -1 : number;
  }

  if (string[index] === ' ') {
    return NaN;
  }

  number = (number * 10) + +string[index];
  return stringToNumberConverter(string, index + 1, number);
}

function stringToNumber(string) {
  if (string.length === 0 || string === ' ') {
    return NaN;
  }

  const index = string[0] === "-" || string[0] === "+" ? 1 : 0;

  return stringToNumberConverter(string, index, 0);
}

function prepareMessage(string, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + string + " is converted into number";
  const expectedResult = " should be " + expected + " and is ";

  return messageSegment + expectedResult + actual;
}

function testStringToNumber(string, expected) {
  const actual = stringToNumber(string);

  console.log(prepareMessage(string, actual, expected));
}

function testAll() {
  testStringToNumber("", NaN);
  testStringToNumber(" ", NaN);
  testStringToNumber("1", 1);
  testStringToNumber("+12", 12);
  testStringToNumber("+42", 42);
  testStringToNumber("-12", -12);
  testStringToNumber('+123', 123);
  testStringToNumber("-123", -123);
  testStringToNumber("r", NaN);
}

testAll();


