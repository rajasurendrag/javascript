/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  const isLeap = !isDivisible(year, 100) && isDivisible(year, 4);
  return isLeap;
}

function prepareMessage(year, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + " is " + year + " leap Year ";
  const expectedResult = " Expected : " + expected;
  return messageSegment + expectedResult + " actual:" + actual;
}

function testLeapYear(year, expected) {
  const actual = isLeapYear(year);
  console.log(prepareMessage(year, actual, expected));
}

function testAll() {
  testLeapYear(400, true);
  testLeapYear(1400, false);
  testLeapYear(300, false);
  testLeapYear(4, true);
  testLeapYear(1900, false);
  testLeapYear(2020, true);
  testLeapYear(2001, false);
  testLeapYear(20011, false);

}

testAll();