function repeat(string, noOfTimes) {
  if (noOfTimes < 1) {
    return '';
  }

  return string + repeat(string, noOfTimes - 1);
}

function prepareMessage(string, noOfTimes, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegement = isTestPassing + string + " is repeated ";
  const expectedResult = noOfTimes + " times " + "'" + expected + "'";

  return messageSegement + expectedResult + " actual:" + "'" + actual + "'";
}

function testRepeat(string, noOfTimes, expected) {
  const actual = repeat(string, noOfTimes);

  console.log("------------------------------------------------------");
  console.log(prepareMessage(string, noOfTimes, actual, expected));
}

function testAll() {
  testRepeat('', 1, '');
  testRepeat('s', 0, "");
  testRepeat('_', 2, '__');
  testRepeat('o', 2, "oo");
  testRepeat(' _ ', 2, ' _  _ ');
  testRepeat('hello Hitman', 0, '');
  testRepeat('not found', 1, 'not found');
  testRepeat('repeating', 2, "repeatingrepeating");
  testRepeat('not found', '2', 'not foundnot found');
  testRepeat('hello World', 2, "hello Worldhello World");
}

testAll();