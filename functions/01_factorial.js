/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
const range = function (from, to, step) {
  const numbers = [];

  for (let i = from; i <= to; i += step) {
    numbers.push(i);
  }

  return numbers;
}

const product = function (number1, number2) {
  return number1 * number2;
}

function factorial(number) {
  return range(2, number, 1).reduce(product, 1);
}

function prepareMessage(number, actualSegment, expected) {
  const isTestPassing = actualSegment === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + " factorial of " + number + " is ";
  const expectedResult = " Expected : " + expected;

  return messageSegment + expectedResult + " actual:" + actualSegment;
}

function testFactorial(number, expected) {
  const actualSegment = factorial(number);

  console.log(prepareMessage(number, actualSegment, expected));
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
  testFactorial(5, 120);

}

testAll();
// 

const isPresent = function (value, index, self) {
  self.indexOf(value) === index;
}

const numbers = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicate = function (array) {
  return array.filter(isPresent);
}

const uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueNumbers);  // Output: [1, 2, 3, 4, 5]


numbers.filter((value, index, self) => {
  return self.indexOf(value) === index;  // Check if the element's first occurrence
});