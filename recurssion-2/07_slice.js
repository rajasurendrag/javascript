function minimum(valueOne, valueTwo) {
  return valueOne < valueTwo ? valueOne : valueTwo;
}

function maximum(valueOne, valueTwo) {
  return valueOne > valueTwo ? valueOne : valueTwo;
}

function segment(text, start, end) {
  if (start > end) {
    return '';
  }

  return segment(text, start, end - 1) + text[end];
}

function slice(text, start, end) {
  if (text === "") {
    return '';
  }

  return segment(text, maximum(start, 0), minimum(text.length - 1, end));
}

function prepareMessage(string, start, end, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegement = isTestPassing + string + " is sliced from " + start;
  const expectedResult = " to " + end + "'" + expected + "'";

  return messageSegement + expectedResult + " actual:" + "'" + actual + "'";
}

function testSlice(string, start, end, expected) {
  const actual = slice(string, start, end);

  console.log("------------------------------------------------------");
  console.log(prepareMessage(string, start, end, actual, expected));
}

function testAll() {
  testSlice('', 0, 0, '');
  testSlice('', 1, 2, '');
  testSlice('s', 0, 0, "s");
  testSlice('s', 0, 1, "s");
  testSlice('aa', 0, 1, 'aa');
  testSlice('aa', 0, 2, 'aa');
  testSlice('summer', 0, 2, "sum");
  testSlice('summer', 15, 12, "");
  testSlice('summer', 0, 10, "summer");
  testSlice('hello Hitman', 0, 10, 'hello Hitma');
  testSlice('not found', -10, 100, 'not found');
}

testAll();

