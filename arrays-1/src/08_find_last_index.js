// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters

function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
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

function testFindLastIndexInNumbers() {
  testFindlastIndex([], 0, -1);
  testFindlastIndex([1], 1, 0);
  testFindlastIndex([1], 5, -1);
  testFindlastIndex([1, 2, 1], 1, 2);
  testFindlastIndex([1, 2, 2, 1, 2], 2, 4);
  testFindlastIndex([1, 3, 4], 4, 2);
  testFindlastIndex([1, 2, 3], 2, 1);
  testFindlastIndex([1, 2, 3, 4], 4, 3);
  testFindlastIndex([6, 2, 3, 1, 4, 7], 6, 0);
}

function testFindLastIndexInStrings() {
  testFindlastIndex([""], "", 0);
  testFindlastIndex(["a"], "", -1);
  testFindlastIndex(["a", "b", "a"], "a", 2);
  testFindlastIndex(["pine", "apple", "pine"], "pine", 2);
  testFindlastIndex(["pine", "apple", "mango", "kiwi", "mango"], "mango", 4);
  testFindlastIndex(["pine", "apple", "mango", "kiwi", "mango"], "tomato", -1);
}

function testAll() {
  testFindLastIndexInNumbers();
  testFindLastIndexInStrings();
}

testAll();
