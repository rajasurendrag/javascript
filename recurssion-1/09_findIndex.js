function findIndex(string, char) {
  return charFoundAt(string, char, 0);
}

function charFoundAt(string, char, index) {
  if (index > string.length - 1) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return charFoundAt(string, char, index + 1);
}

function prepareMessage(text, target, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegement = isTestPassing + "indexOf " + target + " in " + text;
  const expectedResult = " is found at " + expected;

  return messageSegement + expectedResult + " actual:" + actual;
}

function testFindIndex(text, target, expected) {
  const actual = findIndex(text, target);

  console.log(prepareMessage(text, target, actual, expected));
}

function testAll() {
  testFindIndex('', '', -1);
  testFindIndex('o', 'o', 0);
  testFindIndex('not found', 'd', 8);
  testFindIndex('not found', 's', -1);
  testFindIndex('hello World', 'W', 6);
  testFindIndex('hello Hitman', 'H', 6);
  testFindIndex('repeating iiiiii', 'i', 6);
}

testAll();
