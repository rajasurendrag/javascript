function isStringPalindrome(string) {
  if (string === '') {
    return '';
  }

  return backwardString(string, string.length - 1);
}

function backwardString(string, length) {
  if (length === 0) {
    return string[length];
  }

  return string[length] + backwardString(string, length - 1)
}

function prepareMessage(number, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + "first prime above of " + number + " is";
  const expectedResult = " " + expected + " and is ";
  
  return messageSegment + expectedResult + actual;
}

function testReverse(number, expected) {
  const actual = isStringPalindrome(number);
  
  console.log(prepareMessage(number, actual, expected));
}

function testAll() {
  testReverse("", "");
  testReverse("a", "a");
  testReverse("ba", "ab");
  testReverse("abc", "cba");
  testReverse('surendra', "ardnerus");
  testReverse("malayalam", "malayalam");
  testReverse("roler", "relor");
}

testAll();

