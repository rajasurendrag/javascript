// Return true if all elements are present in the array regardless of their order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

export function isPresent(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

export function containsAll(array, elements) {
  if (elements.length === 0) {
    return true;
  }

  for (let index = 0; index < elements.length; index++) {
    if (!isPresent(array, elements[index])) {
      return false;
    }
  }

  return true;
}
