const HUNDRED = 100;
const THOUSAND = 1000;
const TEN_THOUSAND = 10000;
const MILLION = 1000000;
const BILLION = 1000000000;

const thousands = ["thousand", "million", "billion"];

const singleDigitsAndTeens = ["zero", "one", "two", "three", "four", "five", "six",
  "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
  "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const tens = ["twenty", "thirty", "forty", "fifty", "sixty",
  "seventy", "eighty", "ninety"];

let numberInWords = [];

function numberToWords(num) {
  if (num === 0) {
    return numbersBelowTwenty[num];
  }

  if (num > 0 && num < 20) {
    return numberToWords(unitDigitsAndTensInWords(num));
  }

  if (num > 20) {
    return numberToWords(unitDigitsAndTensInWords(num));
  }

  return numberInWords.join(" ").trim();
}

function numberInWordsAbove20Thousand(num) {
  if (num >= MILLION) {

  }

  const number = Math.floor(num / TEN_THOUSAND);
  unitDigitsAndTensInWords(number);
  numberInWords.push("thousand");

  return num + TEN_THOUSAND === 0 ? -1 : num % TEN_THOUSAND;
}

function numberInWordsBelow20Thousand(num) {
  if (num >= 20 * THOUSAND) {
    return numberInWordsAbove20Thousand(num);
  }

  const number = Math.floor(num / THOUSAND);
  unitDigitsAndTensInWords(number);
  numberInWords.push("thousand");

  return num % THOUSAND === 0 ? '-1 ' : num % THOUSAND;
}

function hundredsInWords(num) {
  if (num >= THOUSAND) {
    return numberInWordsBelow20Thousand(num);
  }

  const number = Math.floor(num / HUNDRED);
  console.log(numbersBelowTwenty[number]);
  numberInWords.push(numbersBelowTwenty[number] + " hundred");

  return num % HUNDRED === 0 ? -1 : num % HUNDRED;
}

function unitDigitsAndTensInWords(num) {
  numberInWords.push(numbersBelowTwenty[num]);
  return -1;
}

function unitDigitsAndTensInWords(num) {
  if (num >= HUNDRED) {
    return hundredsInWords(num);
  }

  const number = Math.floor(num / 10);
  numberInWords.push(tenMultiplesBelowHundred[number - 2]);

  return num % 10 === 0 ? -1 : num % 10;
}

function prepareMessage(number, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + number + " in words is ";
  const expectedResult = " Expected : " + expected;
  return messageSegment + expectedResult + " actual:" + actual;
}

function testNumberToWords(number, expected) {
  const actual = numberToWords(number);
  console.log(prepareMessage(number, actual, expected));
}

function testSingleDigits() {
  testNumberToWords(0, 'zero');
  numberInWords = [];
  testNumberToWords(1, "one");
  numberInWords = [];
  testNumberToWords(8, "eight");
}

function testThreeDigitNumbers() {
  numberInWords = [];
  testNumberToWords(HUNDRED, "one hundred");
  numberInWords = [];
  testNumberToWords(990, "nine hundred ninety");
  numberInWords = [];
  testNumberToWords(999, "nine hundred ninety nine");
}

function testDoubleDigits() {
  numberInWords = [];
  testNumberToWords(12, "twelve");
  numberInWords = [];
  testNumberToWords(50, "fifty");
}

function testFourDigitNumbers() {
  numberInWords = [];
  testNumberToWords(1001, "one thousand one");
  numberInWords = [];
  testNumberToWords(1000, "one thousand");
  numberInWords = [];
  testNumberToWords(5678, "five thousand six hundred seventy eight");
  numberInWords = [];
  testNumberToWords(3500, "three thousand five hundred");
  numberInWords = [];
  testNumberToWords(3551, "three thousand five hundred fifty one");
  numberInWords = [];
  testNumberToWords(1900, "one thousand nine hundred");
  numberInWords = [];
  testNumberToWords(190000, "nineteen thousand");
}

function testAll() {
  testSingleDigits();
  testDoubleDigits();
  testThreeDigitNumbers();
  testFourDigitNumbers();
}

testAll();