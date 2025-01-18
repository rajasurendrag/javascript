// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

export function concat(array1, array2) {
  const arraysToConcat = [array1, array2];
  const concatenatedArray = [];

  for (let arrayIndex = 0; arrayIndex < arraysToConcat.length; arrayIndex++) {
    const arrayToConcat = arraysToConcat[arrayIndex];

    for (let index = 0; index < arrayToConcat.length; index++) {
      concatenatedArray.push(arrayToConcat[index]);
    }
  }

  return concatenatedArray;
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

function prepareMessage(array1, array2, actualResult, expected) {
  const isTestPassing = areEqual(actualResult, expected) ? "✅" : "❌";
  let messageSegment = isTestPassing + "concating : [" + array1 + "] and ";
  messageSegment += "array Two : [" + array2 + "] is equal to :";
  const expectedResult = " Expected : " + expected;

  return messageSegment + expected + " actual:" + actualResult;
}

function testConcat(array1, array2, expected) {
  const actualResult = concat(array1, array2);

  console.log(prepareMessage(array1, array2, actualResult, expected));
}

function testConcatOfNumbers() {
  testConcat([], [], []);
  testConcat([0], [], [0]);
  testConcat([], [1], [1]);
  testConcat([1], [1], [1, 1]);
  testConcat([1, 2], [1, 1], [1, 2, 1, 1]);
  testConcat([1, 2, 3], [1, 2, 4], [1, 2, 3, 1, 2, 4]);
}

function testConcatOfStrings() {
  testConcat([], [], []);
  testConcat(["a"], [], ["a"]);
  testConcat(["a"], ["a"], ["a", "a"]);
  testConcat(["a", "b"], ["a", ""], ["a", "b", "a", ""]);
  testConcat(["pine", "apple"], ["green"], ["pine", "apple", "green"]);
}

function testAll() {
  testConcatOfNumbers();
  testConcatOfStrings();
}

// testAll();
