const secondMax = function ([maximum, secondMaximum], number) {
  if (number > maximum) {
    return [number, maximum];
  }

  return [maximum, number, Math.max(number, secondMaximum)];
};

const secondMaxInArray = function (array) {
  if (array.length < 2) {
    return array;
  }

  return [array.reduce(secondMax, [-Infinity, -Infinity])[1]];
};

function testCases() {
  console.log(secondMaxInArray([1, 2, 3, 4, 5, 6, 9, 1000, 999, 1, 4, 5]));
  console.log(secondMaxInArray([2, 3, 4, 1]));
  console.log(secondMaxInArray([1, 2]));
  console.log(secondMaxInArray([5]));
  console.log(secondMaxInArray([]));
  console.log(secondMaxInArray([1, 2, 5, 7, 3, 1]));
  console.log(secondMaxInArray([1, 2, 3, 4, 900, 901]));
  console.log(secondMaxInArray([1, 2, 3, 4, 5, 6, 9]));
}
