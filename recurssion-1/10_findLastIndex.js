function findLastIndex(string, char) {
  return charFromLastFoundAt(string, char, string.length - 1);
}

function charFromLastFoundAt(string, char, index) {
  if (index < 0) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return charFromLastFoundAt(string, char, index - 1);
}

function prepareMessage(text, target, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegement = isTestPassing + "indexOf " + target + " in " + text;
  const expectedResult = " is found last at " + expected;

  return messageSegement + expectedResult + " actual:" + actual;
}

function testLastFindIndex(text, target, expected) {
  const actual = findLastIndex(text, target);

  console.log(prepareMessage(text, target, actual, expected));
}

function testAll() {
  testLastFindIndex('', '', -1);
  testLastFindIndex('o', 'o', 0);
  testLastFindIndex('oooo', 'o', 3);
  testLastFindIndex('hello World', 'W', 6);
  testLastFindIndex('not found', 'd', 8);
  testLastFindIndex('repeating iiiiii', 'i', 15);
  testLastFindIndex('not found', 's', -1);
  testLastFindIndex('hello Hitman', 'H', 6);
}

testAll();
