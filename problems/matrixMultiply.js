function areAllColomnsEqual(matrix) {
  const columnLength = matrix[0].length;

  for (let rowIndex = 1; rowIndex < matrix.length; rowIndex++) {
    if (matrix[rowIndex].length !== columnLength) {
      return false;
    }
  }

  return true;
}

function areMatricesEmpty(matrixA, matrixB) {
  return (matrixA.join().length === 0 && matrixB.join().length === 0);
}

function areMatricesValid(matrixA, matrixB) {
  for (const element of matrixA) {
    if (element.length !== matrixB.length) {
      return false;
    }
  }

  if (!areAllColomnsEqual(matrixA) || !areAllColomnsEqual(matrixB)) {
    return false;
  }

  return true;
}

function productOfRowAndMatrix(rowOfMatrixA, matrixB) {
  const rowOfProductMatrix = [];

  for (let row = 0; row < matrixB[0].length; row++) {
    let sumOfProduct = 0;

    for (let column = 0; column < matrixB.length; column++) {
      sumOfProduct += rowOfMatrixA[column] * matrixB[column][row];
    }

    rowOfProductMatrix.push(sumOfProduct);
  }

  return rowOfProductMatrix;
}

function multiplyMatrices(matrixA, matrixB) {
  if (areMatricesEmpty(matrixA, matrixB)) {
    return matrixA;
  }

  if (!areMatricesValid(matrixA, matrixB)) {
    return NaN;
  }

  const productMatrix = [];

  for (let row = 0; row < matrixA.length; row++) {
    productMatrix.push(productOfRowAndMatrix(matrixA[row], matrixB));
  }

  return productMatrix;
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

function areArraysEqual(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function prepareMessage(array1, array2, actualResult, expected) {
  const isTestPassing = areArraysEqual(actualResult, expected) ? "✅" : "❌";
  let messageSegment = isTestPassing + "multiplicating : [" + array1 + "] ";
  messageSegment += " and array Two : [" + array2 + "] is equal to :";
  const expectedResult = " Expected : " + expected;

  return messageSegment + expectedResult + " actual:" + actualResult;
}

function testMultiplyMatrix(array1, array2, expected) {
  const actualResult = multiplyMatrices(array1, array2);

  console.log(prepareMessage(array1, array2, actualResult, expected));
}

function multiElementMatrices() {
  testMultiplyMatrix([[1]], [[1, 2]], [[1, 2]]);
  testMultiplyMatrix([[1], [2]], [[1, 2]], [[1, 2], [2, 4]]);
  testMultiplyMatrix([[], []], [[1, 2]], NaN);
  testMultiplyMatrix([[1, 2]], [[], []], NaN);
  testMultiplyMatrix([[1, 2]], [[3, 4], [5, 6]], [[13, 16]]);
  testMultiplyMatrix([[1, 2], [1, 2]], [[1, 2, 3], [1, 2, 3]], [[3, 6, 9],
  [3, 6, 9]]);
  testMultiplyMatrix([[1, 2], [3, 4]], [[5, 6], [7, 8]], [[19, 22],
  [43, 50]]);
}

function singleElementMatrices() {
  testMultiplyMatrix([], [], []);
  testMultiplyMatrix([[]], [[]], [[]]);
  testMultiplyMatrix([[0]], [[0]], [[0]]);
  testMultiplyMatrix([[1]], [[1]], [[1]]);
}

function IncompatibleTestCases() {
  testMultiplyMatrix([[]], [[0]], NaN);
  testMultiplyMatrix([[1, 2], [3, 4]], [[5, 6]], NaN);
  testMultiplyMatrix([[1, 2]], [[3, 4], [5, 6, 7]], NaN);
  testMultiplyMatrix([[1, 2], [3, 4]], [[5], [7, 8]], NaN);
}

function testCases() {
  IncompatibleTestCases();
  singleElementMatrices();
  multiElementMatrices();
}

testCases();

