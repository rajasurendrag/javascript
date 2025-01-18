// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters

function filterAbove(array, threshold) {
  const filterdNumbers = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filterdNumbers[filterdNumbers.length] = array[index];
    }
  }

  return filterdNumbers;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function prepareMessage(array, threshold, actualSegment, expected) {
  const isTestPassing = areEqual(actualSegment, expected) ? "✅" : "❌";
  let messageSegment = isTestPassing + "numbers above " + threshold;
  messageSegment += " in : [" + array;
  const expectedResult = "] are " + " Expected : " + expected;

  return messageSegment + expectedResult + " actual: " + actualSegment;
}

function testFilterAbove(array, threshold, expected) {
  const actualSegment = filterAbove(array, threshold);

  console.log(prepareMessage(array, threshold, actualSegment, expected));
}

function testAll() {
  testFilterAbove([], 0, []);
  testFilterAbove([1], 0, [1]);
  testFilterAbove([1], 1, []);
  testFilterAbove([1, 2], 1, [2]);
  testFilterAbove([1, 3, 4], 4, []);
  testFilterAbove([1, 2, 3], 2, [3]);
  testFilterAbove([1, 2, 3, 4], 2, [3, 4]);
  testFilterAbove([6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);
}

testAll();
