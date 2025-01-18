/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubStringExists(string, index, substring) {
  for (let subStrIndex = 0; subStrIndex < substring.length; subStrIndex++) {
    if (string[index + subStrIndex] !== substring[subStrIndex]) {
      return false;
    }
  }

  return true;
}

function occurrences(string, substring) {
  let noOfOccurance = 0;
  if (substring === '') {
    return 0;
  }

  for (let index = 0; index < string.length; index++) {
    if (isSubStringExists(string, index, substring)) {
      noOfOccurance++;
    }
  }

  return noOfOccurance;
}

// -----------------------------TEST FRAGMENT------------------------------ //

function prepareMessage(string, subString, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + subString + " is appeared " + actual;
  const expectedResult = " times in " + string + " expected : " + expected;
  return messageSegment + expectedResult;
}

function testOccurances(string, subString, expected) {
  const actual = occurrences(string, subString);
  console.log(prepareMessage(string, subString, actual, expected));
}

function testAll() {
  testOccurances('', '', 0);
  testOccurances('', 'aa', 0);
  testOccurances('aaaa', '', 0);
  testOccurances('aaaa', 'aa', 3);
  testOccurances('aaaa', 'aaaa', 1);
  testOccurances('hello world', 'l', 3);
  testOccurances('hello world', 'll', 1);
  testOccurances('hello world', 'world', 1);
  testOccurances('hello world', 'zebra', 0);
}

testAll();
