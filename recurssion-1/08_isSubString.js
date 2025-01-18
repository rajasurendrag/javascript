function isSubStringFound(string, subString, index, subStrIndex) {
  if (subStrIndex === subString.length) {
    return true;
  }

  if (string[index] === subString[subStrIndex]) {
    return isSubStringFound(string, subString, index + 1, subStrIndex + 1);
  }

  return false;
}

function doesSubStringpresent(string, subString, index) {
  if (index > string.length) {
    return false;
  }

  if (isSubStringFound(string, subString, index, 0)) {
    return true;
  }

  return doesSubStringpresent(string, subString, index + 1);
}

function isSubString(string, otherString) {
  if (otherString.length === 0 || string.length === 0) {
    return false;
  }

  return doesSubStringpresent(string, otherString, 0);
}

function prepareMessage(string, subString, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + subString + " exists in " + "'";
  const expectedResult = string + "'" + " " + expected;

  return messageSegment + expectedResult + " actual:" + actual;
}

function testIsSubString(string, subString, expected) {
  const actual = isSubString(string, subString);

  console.log(prepareMessage(string, subString, actual, expected));
}

function testAll() {
  testIsSubString('', '', false);
  testIsSubString('', 'for', false);
  testIsSubString('a', 'a', true);
  testIsSubString('not found', '', false);
  testIsSubString('h world', 'worl', true);
  testIsSubString('hello world', 'lo wo', true);
  testIsSubString('r iii', 'i', true);
  testIsSubString('t found', 'for', false);
  testIsSubString('found', 'fo', true);
  testIsSubString('not found', 'nut', false);
}

testAll();