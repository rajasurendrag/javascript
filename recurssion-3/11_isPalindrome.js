function isStringPalindrome(string) {
  if (string.length === 0) {
    return true;
  }

  return isStringSymmetric(string, 0, string.length - 1);
}

function isStringSymmetric(string, start, length) {
  if (string[start] !== string[length]) {
    return false;
  }

  if (start > length) {
    return true;
  }

  return isStringSymmetric(string, start + 1, length - 1);
}

function prepareMessage(string, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing+ "given string palindrome " + string + " is";
  const expectedResult = " " + expected + " and is ";
  
  return messageSegment + expectedResult + actual;
}

function testIsPalindrome(string, expected) {
  const actual = isStringPalindrome(string);
  
  console.log(prepareMessage(string, actual, expected));
}

function testAll() {
  testIsPalindrome("", true);
  testIsPalindrome("a", true);
  testIsPalindrome("aa", true);
  testIsPalindrome("ba", false);
  testIsPalindrome('surendra', false);
  testIsPalindrome("malayalam", true);
  testIsPalindrome("roler", false);
}

testAll();
