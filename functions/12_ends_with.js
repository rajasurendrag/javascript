/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false 

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

function endsWith(string, substring) {
  if (substring.length === 0 || string === substring) {
    return true;
  }

  let startIndex = string.length - substring.length;

  return isSubStringExists(string, startIndex, substring);
}

// -----------------------------TEST FRAGMENT------------------------------ //
function prepareMessage(string, subString, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + "is " + string + " ends with ";
  const expectedResult = subString + " " + expected;
  return messageSegment + expectedResult + " actual:" + actual;
}

function testendsWith(string, subString, expected) {
  const actual = endsWith(string, subString);
  console.log(prepareMessage(string, subString, actual, expected));
}

function testAll() {
  testendsWith('hello world', 'ld', true);
  testendsWith('world', 'world', true);
  testendsWith('hello world', 'world', true);
  testendsWith('hello World', 'world', false);
  testendsWith('hello world', 'hello', false);
  testendsWith('hello world', 'wor', false);
  testendsWith('', 'wor', false);
  testendsWith('hello world', '', true);
  testendsWith('', '', true);

}

testAll();
