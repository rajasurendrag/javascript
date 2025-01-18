// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function isPresent(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function disJoint(array1, array2) {
  const disJointArray = [];

  for (let index = 0; index < array1.length; index++) {
    if (!isPresent(array2, array1[index])) {
      disJointArray.push(array1[index]);
    }
  }

  return disJointArray;
}

export function difference(array1, array2) {
  if (array1.length === 0 || array2.length === 0) {
    return array1.length > array2.length ? array1 : array2;
  }

  return disJoint(array1, array2);
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
  let messageSegment = isTestPassing + "difference of  : [" + array1;
  messageSegment += "] and " + "array Two : [" + array2 + "] is equal to :";
  const expectedResult = " Expected : " + expected;

  return messageSegment + expected + " actual:" + actualResult;
}

function testdifference(array1, array2, expected) {
  const actualResult = difference(array1, array2);

  console.log(prepareMessage(array1, array2, actualResult, expected));
}

function testAll() {
  testdifference([], [], []);
  testdifference([0], [], [0]);
  testdifference([], [1], [1]);
  testdifference([1], [1], []);
  testdifference([1, 2], [1, 1], [2]);
  testdifference([1, 2, 3], [1, 2, 4], [3]);
}

// testAll();
