function replaceTarget(text, target, replacement, index) {
  if (index > text.length - 1) {
    return '';
  }

  const charToReplace = replacingChar(text[index], target, replacement);

  return charToReplace + replaceTarget(text, target, replacement, index + 1);
}

function replacingChar(char, target, replacement) {
  return char === target ? replacement : char;
}

function replace(text, target, replacement) {
  if (target === '' || replacement === '') {
    return text;
  }

  return replaceTarget(text, target, replacement, 0);
}

function prepareMessage(string, target, replacement, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegement = isTestPassing + " in " + string + "  " + target;
  let expectedResult = " is replaced with " + replacement;
  expectedResult += " '" + expected + "'";

  return messageSegement + expectedResult + " actual:" + "'" + actual + "'";
}

function testSlice(string, target, replacement, expected) {
  const actual = replace(string, target, replacement);

  console.log("------------------------------------------------------");
  console.log(prepareMessage(string, target, replacement, actual, expected));
}

function testAll() {
  testSlice('', '', '', '');
  testSlice('aa', '', 's', 'aa');
  testSlice('aa', 'a', '', 'aa');
  testSlice('s', 's', 'a', 'a');
  testSlice('s', 'a', 'f', 's');
  testSlice('ss', 's', 'a', 'aa');
  testSlice('ss', 'a', 'f', 'ss');
  testSlice('bear', 'b', 'p', "pear");
  testSlice('summer', 'm', 'p', "supper");
  testSlice('summer', 's', 'h', "hummer");
}

testAll();
