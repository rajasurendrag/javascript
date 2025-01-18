// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array

export function concat(array1, array2) {
  const arraysToConcat = [array1, array2];
  const concatenatedArray = [];

  for (let i = 0; i < arraysToConcat.length; i++) {
    const arrayToConcat = arraysToConcat[i];

    for (let j = 0; j < arrayToConcat.length; j++) {
      concatenatedArray.push(arrayToConcat[j]);
    }
  }

  return concatenatedArray;
}

export function dropLast(arrary, nElements) {
  const arrayAfterDroping = concat([], arrary);

  for (let index = 0; index < nElements; index++) {
    arrayAfterDroping.pop();
  }

  return arrayAfterDroping;
}
