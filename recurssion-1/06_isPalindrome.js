function isStringSymmetric(palindromeCandidate, left, right) {
  if (palindromeCandidate[left] !== palindromeCandidate[right]) {
    return false;
  }

  if (left > right) {
    return true;
  }

  return isStringSymmetric(palindromeCandidate, left + 1, right - 1);
}

function isPalindrome(palindromeCandidate) {
  if (palindromeCandidate.length < 2) {
    return true;
  }

  const string = palindromeCandidate;
  
  return isStringSymmetric(string, 0, string.length - 1);
}

function prepareMessage(string, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + "given string " + string + " is";
  const expectedResult = " " + expected + " and is ";

  return messageSegment + expectedResult + actual;
}

function testIsPalindrome(string, expected) {
  const actual = isPalindrome(string);

  console.log(prepareMessage(string, actual, expected));
}

function testAll() {
  testIsPalindrome("", true);
  testIsPalindrome("a", true);
  testIsPalindrome("aa", true);
  testIsPalindrome("ba", false);
  testIsPalindrome("baba", false);
  testIsPalindrome('surendra', false);
  testIsPalindrome("malayalam", true);
  testIsPalindrome("roler", false);
  testIsPalindrome("xerox", false);
}

testAll();

