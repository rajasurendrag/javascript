// sumOf([1, 2, 3, 4]) => 10
const add = (num1, num2) => num1 + num2;

const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

// productOf([1, 2, 3, 4]) => 24
const product = (num1, num2) => num1 * num2;

const productOf = function (numbers) {
  return numbers.reduce(product, 1);
};

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  const totalSum = numbers.reduce(add, 0);

  return totalSum / numbers.length;
};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((min, number) => Math.min(min, number), Infinity);
};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((max, number) => Math.max(max, number), -Infinity);
};

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const addIfPositive = function (accumulator, number) {
  return number > 0 ? accumulator + number : accumulator;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.reduce(addIfPositive, 0);
};

// sumOfSquares([1, 2, 3, 4]) => 30
const square = (num) => product(num, num);

const sumOfSquares = function (numbers) {
  return numbers.reduce(
    (runningTotal, number) => square(number) + runningTotal,
    0
  );
};

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {
  return numbers.reduce(
    (oddSum, number) => (number & 1 ? oddSum + number : oddSum),
    0
  );
};

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.reduce((count, number) => (number < 0 ? count + 1 : count), 0);
};

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((sum, number) => sum + square(number), 0);
};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((string, word) => string + word, "");
};

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduceRight((longest, word) =>
    longest.length > word.length ? longest : word
  );
};

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduceRight((longest, word) =>
    longest.length < word.length ? longest : word
  );
};

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  return words.reduce((commaSeperated, word) => commaSeperated + "," + word);
};

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words.reduce((reversed, word) => word + " " + reversed);
};

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce((spacedWords, word) => spacedWords + " " + word);
};

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce((joinedNames, name) => joinedNames + name, "");
};

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) {};

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {
  return words.reduce(
    (camelCase, word) => camelCase + word[0].toUpperCase() + word.slice(1)
  );
};

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) {
  return words.reduce();
};

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const insertIfNotPresent = function (uniques, element) {
  if (!uniques.includes(element)) {
    uniques.push(element);

    return uniques;
  }

  return uniques;
};

const duplicateNumbers = function (numbers) {
  return numbers.reduce(insertIfNotPresent, []);
};

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {
  return arrays.reduce(
    (concatedArray, array) => concatedArray.concat(array),
    []
  );
};

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {
  return arrays.reduce((flattedArray, array) =>
    flattedArray.concat(array.flat(Infinity))
  );
};

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {
  return numbers.reduce(insertIfNotPresent, []);
};

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const pushOnLength = function (object, element) {
  if (object[element.length]) {
    object[element.length].push(element);

    return object;
  }

  object[element.length] = [element];

  return object;
};

const groupByLength = (strings) => strings.reduce(pushOnLength, {});

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const occurances = (occurances, element) => {
  element in occurances
    ? (occurances[element] += 1)
    : (occurances[element] = 1);

  return occurances;
};

const countOccurrences = (strings) => strings.reduce(occurances, {});

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = (objects) => objects.reduce(countTotal, {});

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {
  return keys.reduce((object, key, index) => {
    object[key] = values[index];
    return object;
  }, {});
};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {
  return zip(keys, values);
};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {
  const entries = Object.entries(obj);
  const object = {};

  entries.map((entry) => (object[entry[1]] = entry[0]));

  return object;
};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((object, array) => {
    object[array[0]] = array[1];
    return object;
  });

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {
  return objects.reduce((groupedObject, object) => {
    groupedObject[object.age] = object;

    return groupedObject;
  }, {});
};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = (numbers) =>
  numbers.reduce((ascendings, number) => {
    const element = number < ascendings.at(-1) ? [number] : number;
    ascendings.push(element);

    return ascendings;
  }, []);

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {
  return mergeArrays(pairs, []);
};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {
  return arr.reduce((flattened, array) =>
    flattened.concat(array).flat(Infinity)
  );
};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {
  return numbers.reduce(
    (accumulator, element) => [
      ...accumulator,
      element + accumulator.at(-1) || 0,
    ],
    []
  );
};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupOnType = function (obj, element) {
  const type = typeof element;
  if (obj[type]) {
    obj[type].push(element);

    return obj;
  }

  obj[type] = [element];

  return obj;
};

const groupByType = function (array) {
  return array.reduce(groupOnType, {});
};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const average = function (array, element, index) {
  return [...array, element / (index + 1)];
};

const runningAverages = function (numbers) {
  const runningTotal = cumulativeSum(numbers);

  return runningTotal.reduce(average, []);
};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date", "custurd apple"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByLetter = function (object, element) {
  let key = object[element.at(0)];
  if (key) {
    object[element.at(0)].push(element);

    return object;
  }

  object[element.at(0)] = [element];

  return object;
};

const groupByFirstLetter = function (words) {
  return words.reduce(groupByLetter, {});
};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const firstUniuqechar = function (firstUnique, element, _, array) {
  if (firstUnique.length === 1) {
    return firstUnique;
  }

  const firstIndexOfelement = array.findIndex(
    (element1) => element1 === element
  );
  const lastIndexOfelement = array.findLastIndex(
    (element1) => element1 === element
  );
  return firstIndexOfelement === lastIndexOfelement ? [element] : [];
};

const findFirstNonRepeated = function (numbers) {
  return numbers.reduce(firstUniuqechar, []);
};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {};

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {};

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {};

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupRecordByDate = (groupedObject, object) => {
  const date = object.date;
  if (groupedObject[date]) {
    groupedObject[date].push(object.value);

    return groupedObject;
  }

  groupedObject[date] = [object.value];
  return groupedObject;
};

const groupByDate = function (records) {
  return records.reduce(groupRecordByDate, {});
};

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {
  return { min: Math.min(...numbers), max: Math.max(...numbers) };
};

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) {};
