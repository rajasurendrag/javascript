const fibonacciTerms = function (array) {
  return [array[1], array[0] + array[1]];
}

const nthFibonacci = function (number) {
  const numsArray = Array(number - 1).fill(0);
  return numsArray.reduce(fibonacciTerms, [0, 1])[0];
}

console.log(nthFibonacci(5));
console.log(nthFibonacci(10));
