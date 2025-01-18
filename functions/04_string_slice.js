/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function maximum(valueOne, valueTwo) {
  return valueOne > valueTwo ? valueOne : valueTwo;
}

function minimum(valueOne, valueTwo) {
  return valueOne < valueTwo ? valueOne : valueTwo;
}

function slice(text, start, end) {
  let stringSlice = "";
  const startsFrom = maximum(start, 0);
  const endsAt = minimum(end, text.length - 1);

  for (let index = startsFrom; index <= endsAt; index++) {
    stringSlice += text[index];
  }

  return stringSlice;
}

function prepareMessage(text, start, end, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  let messageSegment = isTestPassing + "slice of string " + text + " from ";
  messageSegment += start + " to " + end;
  const expectedResult = " is " + expected;
  return messageSegment + expectedResult + " actual:" + actual;
}

function testSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  console.log(prepareMessage(text, start, end, actual, expected));
}

function testAll() {
  testSlice('', 0, 0, '')
  testSlice('fruit', 0, -1, '')
  testSlice('', -1, 8, '')
  testSlice('start', 0, 4, 'start')
  testSlice('hello world', 0, 4, 'hello')
  testSlice('negative start', -1, 7, 'negative')
  testSlice('started first', 8, 8, 'f')
  testSlice('start', -1, 3, 'star')
}

testAll();

