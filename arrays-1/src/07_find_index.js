
// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters

function findLastIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

function prepareMessage(array, element, actualSegment, expected) {
  const isTestPassing = actualSegment === expected ? "✅" : "❌";
  let messageSegment = isTestPassing + "numbers below " + element;
  messageSegment += " in : [" + array;
  const expectedResult = "] are " + " Expected : " + expected;

  return messageSegment + expectedResult + " actual: " + actualSegment;
}

function testFindlastIndex(array, element, expected) {
  const actualSegment = findLastIndex(array, element);

  console.log(prepareMessage(array, element, actualSegment, expected));
}

function testFindIndexInNumbers() {
  testFindlastIndex([], 0, -1);
  testFindlastIndex([1], 1, 0);
  testFindlastIndex([1, 2], 5, -1);
  testFindlastIndex([1, 2], 2, 1);
  testFindlastIndex([1, 3, 4], 4, 2);
  testFindlastIndex([1, 2, 3], 2, 1);
  testFindlastIndex([1, 2, 3, 4], 4, 3);
  testFindlastIndex([6, 2, 3, 1, 4, 7], 6, 0);
}

function testFindLastIndexInStrings() {
  testFindlastIndex([""], "", 0);
  testFindlastIndex(["a"], "", -1);
  testFindlastIndex(["a"], "a", 0);
  testFindlastIndex(["pine", "apple"], "apple", 1);
  testFindlastIndex(["pine", "apple", "kiwi"], "mango", -1);
}

function testAll() {
  testFindIndexInNumbers();
  testFindLastIndexInStrings();
}

testAll();
