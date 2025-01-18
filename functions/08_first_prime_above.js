/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isPrime(number) {
  for (let factor = 2; factor <= (number ** 0.5); factor++) {
    if (isDivisible(number, factor)) {
      return false;
    }
  }

  return true;
}

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  let primeCandidate = number + 1;

  while (!isPrime(primeCandidate)) {
    primeCandidate++;
  }

  return primeCandidate;
}

// -----------------------------TEST FRAGMENT------------------------------ //

function prepareMessage(number, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + "first prime above of " + number + " is";
  const expectedResult = " " + expected + " and is ";
  return messageSegment + expectedResult + actual;
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  console.log(prepareMessage(number, actual, expected));
}

function testAll() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(7, 11);
  testFirstPrimeAbove(21, 23);
  testFirstPrimeAbove(25, 29);
}

testAll();

