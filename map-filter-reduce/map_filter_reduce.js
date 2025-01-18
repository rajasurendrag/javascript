// ["abc","def","ghi"] => "cfi"
// You are given an array of strings. Write a function to return a single
// string that is the concatenation of the last character of every string
//in the array.

const lastCharsOfString = function (accumulator, string) {
  return accumulator + string.at(-1);
};

const isStringNotEmpty = function (string) {
  return string.length !== 0;
};

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.filter(isStringNotEmpty).reduce(lastCharsOfString, "");
};

// [[1,-2],[3,4],[5,-6]] => [[3,4]]
// Write a function to return a new array containing only those lists that
// contain at least one positive number.

const isPositive = function (number) {
  return number > 0;
};

const filterPositive = function (array) {
  return array.every(isPositive);
};

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(filterPositive);
};

// [0,-1,-2,3,4] => 12
// Write a function to calculate the product of all the positive numbers in
// the array. 0 is not positive.

const product = function (multiplicand, multiplier) {
  return multiplicand * multiplier;
};

const productOfPositives = function (numbers) {
  return numbers.filter(isPositive).reduce(product, 1);
};

// ["educate", "there", "animation"] => "educate"
// Write a function to return the longest string that contains the letter "e".

const longestString = function (string1, string2) {
  return string2.length > string1.length ? string2 : string1;
};

const isStringIncludesE = function (string) {
  return string.includes("e");
};

const longestEWord = function (strings) {
  return strings.filter(isStringIncludesE).reduce(longestString, "");
};

// [[2, 4, 6], [1, 3, 5], [8, 10]] => false
// [[2,4],[6,8]] => true
// Write a function to check if all lists contain only even numbers. Return
// `true` if they do, and `false` otherwise.

const isEven = function (number) {
  return number % 2 === 0;
};

const areAllEven = function (array) {
  return array.every(isEven);
};

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(areAllEven);
};

// [1,2,3,4] => 10 (sqr(1) + sqr(3))
// Write a function to calculate the sum of the squares of all the odd
// numbers in the array

const isOdd = function (number) {
  return number & 1;
};

const square = function (number) {
  return Math.pow(number, 2);
};

const sum = function (number1, number2) {
  return number1 + number2;
};

const sumOfSquaresOfOdds = function (numbers) {
  return numbers.filter(isOdd).map(square).reduce(sum, 0);
};

// ["abc","def"] => true
// ["abc","de"] => false
// Write a function to check if all strings have the same length. Return
// `true` if they do, and `false` otherwise.

const areAllOfSameLength = function (listOfStrings) {
  const length = listOfStrings[0].length;

  const areStringsLengthEqual = function (string) {
    return length === string.length;
  };

  return listOfStrings.every(areStringsLengthEqual);
};

const lengthOfString = function (string) {
  return string.length;
};

const areAllOfSameLength2 = function (listOfStrings) {
  const lengthsArray = removeDuplicates(listOfStrings.map(lengthOfString));

  return lengthsArray.length !== 1 ? false : true;
};

// [1,2,3,4,1,2] => [1,2,3,4]
// Write a function to return a new array with all duplicate values removed.

const concatUniqueElements = function (uniqueArray, element) {
  const isElementPresent = uniqueArray.includes(element);

  return isElementPresent ? uniqueArray : uniqueArray.concat(element);
};

const removeDuplicates = function (numbers) {
  return numbers.reduce(concatUniqueElements, []);
};

// ["ant", "eye", "id"] => true
// ["ant","bat"] => false
// Write a function to check if all the strings in the array start with a
//vowel. Return `true` if they do, and `false` otherwise.
const isStartingWithVowel = function (string) {
  const allVowels = "aeiouAEIOU";

  return allVowels.includes(string[0]);
};

const allStartWithAVowel = function (words) {
  return words.every(isStartingWithVowel);
};

// [1,2,3,4] => [1,3,6,10]
// [1,1,4,5] => [1,2,6,11]
// Build an array where each element is the running sum of the elements up to
// that index.

const pushRunningSum = function (array, element) {
  array.push(array.at(-1) + element);

  return array;
};

const runningTotal = function (numbers) {
  const totalArray = numbers.reduce(pushRunningSum, [0]);
  totalArray.shift();

  return totalArray;
};

// [] => [[]]
// [1] => [[1]]
// [1,2] => [[1,2]]
// [1,2,3] => [[1,2],[3]]
// [1,2,3,4] => [[1,2],[3,4]]
// Write a function to pair up elements of a list.

const pairUp = function (pairsArray, element) {
  const lastElement = pairsArray.at(-1);

  if (lastElement.length < 2) {
    lastElement.push(element);

    return pairsArray;
  }

  pairsArray.push([element]);
  return pairsArray;
};

const pairs = function (list) {
  return list.reduce(pairUp, [[]]);
};

const stringLength = function (string) {
  return string.length;
};

const wordsLength = function (array) {
  return array.map(stringLength).every(isLengthSame(array));
};

function isLengthSame(array) {
  return function (string) {
    return string === array[0].length;
  };
}

// ------------------------TEST FRAGMENT------------------------\\

const testAllFunctions = function ([array, expected, func, failed]) {
  const actual = func(array);

  if (actual !== expected) {
    return failed.push([func, array, actual, expected]);
  }

  return failed;
};

const testAllLastChars = function (failed) {
  const testCases = [
    [[""], "", allLastChars, failed],
    [["a"], "a", allLastChars, failed],
    [["ab"], "b", allLastChars, failed],
    [["abc"], "c", allLastChars, failed],
    [["abc", "def"], "cf", allLastChars, failed],
    [["abc", "def", "ghi"], "cfi", allLastChars, failed],
  ];

  return testCases.map(testAllFunctions);
};

const testProductOfPositives = function (failed) {
  const testCases = [
    [[1], 1, productOfPositives, failed],
    [[1, -1], 1, productOfPositives, failed],
    [[1, 2, -3], 2, productOfPositives, failed],
    [[0, -1, -2, 3, 4], 12, productOfPositives, failed],
  ];

  return testCases.map(testAllFunctions);
};

const testListWithPositiveNumbers = function (failed) {
  const testCases = [
    [[[1]], [1], listsWithPositiveNumbers, failed],
    [[[1, -2]], [], listsWithPositiveNumbers, failed],
    [
      [
        [1, -2],
        [3, 4],
      ],
      [3, 4],
      listsWithPositiveNumbers,
      failed,
    ],
    [
      [
        [1, -2],
        [3, 4],
        [5, -6],
      ],
      [3, 4],
      listsWithPositiveNumbers,
      failed,
    ],
  ];

  return testCases.map(productOfPositives);
};

const testLongestEWord = function (failed) {
  const testCases = [
    [[""], "", longestEWord, failed],
    [["e"], "e", longestEWord, failed],
    [["e", "ae"], "ae", longestEWord, failed],
    [["e", "educate"], "educate", longestEWord, failed],
    [["e", "educate", "education"], "education", longestEWord, failed],
  ];

  return testCases.map(testAllFunctions);
};

const testAreAllSameLength = function (failed) {
  const testCases = [
    [["h"], true, areAllOfSameLength, failed],
    [["h", "a"], true, areAllOfSameLength, failed],
    [["h", "ha"], false, areAllOfSameLength, failed],
    [["h", "ha", ""], false, areAllOfSameLength, failed],
    [["abc", "def", "ghi"], true, areAllOfSameLength, failed],
  ];

  return testCases.map(testAllFunctions);
};

const testAreAllListsEven = function (failed) {
  const testCases = [
    [[], true, areAllListsEven, failed],
    [[[0]], true, areAllListsEven, failed],
    [[[1]], false, areAllListsEven, failed],
    [[[2]], true, areAllListsEven, failed],
    [[[2], [1]], false, areAllListsEven, failed],
    [
      [
        [2, 4],
        [6, 7],
      ],
      false,
      areAllListsEven,
      failed,
    ],
  ];

  return testCases.map(testAllFunctions);
};

const testSumOfOddSquares = function (failed) {
  const testCases = [
    [[0], 0, sumOfSquaresOfOdds, failed],
    [[1], 1, sumOfSquaresOfOdds, failed],
    [[1, 2, 3], 10, sumOfSquaresOfOdds, failed],
    [[1, 2, 3, 5], 35, sumOfSquaresOfOdds, failed],
  ];

  return testCases.map(testAllFunctions);
};

const testRemoveDuplicates = function (failed) {
  const testCases = [
    [[1], [1], removeDuplicates, failed],
    [[1, 1], [1], removeDuplicates, failed],
    [[1, 2], [1, 2], removeDuplicates, failed],
    [[1, 2, 2], [1, 2], removeDuplicates, failed],
    [[1, 2, 2, 1], [1, 2], removeDuplicates, failed],
    [[1, 2, 2, 3], [1, 2, 3], removeDuplicates, failed],
  ];

  return testCases.map(testAllFunctions);
};

const testAllStartWithVowels = function (failed) {
  const testCases = [
    [["a"], true, allStartWithAVowel, failed],
    [["a", "b"], false, allStartWithAVowel, failed],
    [["a", "e"], true, allStartWithAVowel, failed],
    [["ant", "ebat", "rat"], false, allStartWithAVowel, failed],
    [["ant", "ebat", "unit"], true, allStartWithAVowel, failed],
  ];

  return testCases.map(testAllFunctions);
};

const testRunningTotal = function (failed) {
  const testCases = [
    [[1], [1], runningTotal, failed],
    [[1, 2], [1, 3], runningTotal, failed],
    [[1, 2, 3], [1, 3, 6], runningTotal, failed],
    [[1, 2, 3, 4], [1, 3, 6, 10], runningTotal, failed],
  ];

  return testCases.map(testAllFunctions);
};

const testAll = function () {
  const failed = [["function name", "Array", "Actual", "expected"]];
  failed.push(["-----------------", "-----", "------", "--------"]);
  testAllLastChars(failed);
  testListWithPositiveNumbers(failed);
  testProductOfPositives(failed);
  testLongestEWord(failed);
  testAreAllSameLength(failed);
  testAreAllListsEven(failed);
  testSumOfOddSquares(failed);
  testRemoveDuplicates(failed);
  testAllStartWithVowels(failed);
  testRunningTotal(failed);

  console.table(failed);
};

testAll();
