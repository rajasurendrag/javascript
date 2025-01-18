// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
// do not modifyreverseinput parameters

export function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((element, index) => element === array2[index]);
}
