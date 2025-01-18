/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getCharToReplace(replacement, char, match) {
  const isCharMatching = char === match;
  return isCharMatching ? replacement : char;
}

function replace(text, match, replacement) {
  let replacedText = "";

  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    const charToReplace = getCharToReplace(replacement, char, match);
    replacedText = replacedText + charToReplace;
  }

  return replacedText;
}

// -----------------------------TEST FRAGMENT-----------------------------
function prepareMessage(string, match, replacement, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + match + " replaced " + replacement;
  const expectedResult = " in " + string + " Expected : " + expected;
  return messageSegment + expectedResult + " actual:" + actual;
}

function testStringReplace(string, match, replacement, expected) {
  const actual = replace(string, match, replacement);
  console.log(prepareMessage(string, match, replacement, actual, expected));
}

function testAll() {

  testStringReplace('hello world', 'l', 'n', "henno wornd");
  testStringReplace('no spaces in here', ' ', '_', "no_spaces_in_here");
  testStringReplace('no', ' ', '_', 'no');
  testStringReplace('no spaces in here', ' ', '-', "no-spaces-in-here");
  testStringReplace('', 'd', 'e', '');
  testStringReplace('ddddde', 'd', 'e', "eeeeee");

}

testAll();
// to be upoladed