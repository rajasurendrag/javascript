/*
  Implement the below function that tells 
  if a string is substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getEndIndex(string, subString) {
  return subString === "" ? 0 : string.length - subString.length + 1;
}

function isSubStringExists(string, index, substring) {
  for (let subStrIndex = 0; subStrIndex < substring.length; subStrIndex++) {
    if (string[index + subStrIndex] !== substring[subStrIndex]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  const endIndex = getEndIndex(string, subString);

  for (let index = 0; index < endIndex; index++) {
    if (isSubStringExists(string, index, subString)) {
      return true;
    }
  }

  return false;
}

// -----------------------------TEST FRAGMENT------------------------------ //

function prepareMessage(string, subString, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + subString + " exists in " + "'";
  const expectedResult = string + "'" + " " + expected;

  return messageSegment + expectedResult + " actual:" + actual;
}

function testIsSubString(string, subString, expected) {
  const actual = isSubstring(string, subString);

  console.log(prepareMessage(string, subString, actual, expected));
}

function testAll() {
  testIsSubString('', '', false);
  testIsSubString('', 'for', false);
  testIsSubString('a', 'a', true);
  testIsSubString('not found', '', false);
  testIsSubString('h world', 'worl', true);
  testIsSubString('r iii', 'i', true);
  testIsSubString('t found', 'for', false);
  testIsSubString('found', 'fo', true);
  testIsSubString('not found', 'nut', false);
}

testAll();

// to be uploaded
// for file in *.js; do deno "$file"; done