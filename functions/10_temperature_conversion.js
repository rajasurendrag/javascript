/*
Write a function that converts temperature from one unit to another

Function takes three arguments: `from`, `to`, `value`
 
`from` and `to` can have following values:
- C
- F
- K

Here C means Celsius, K is Kelvin and F is Fahrenheit

Examples:
convert('C', 'K', 0) => 273.15
convert('C', 'F', 37) => 98.6
convert('F', 'K', 98.6) => 310.15
convert('F', 'C', -40) => -40
convert('K', 'C', 100) => -173.15
convert('K', 'F', 100) => -279.67

Here are the conversion formulae in case you wonder how it is done :)
- F to C:
(F − 32) × 5/9 = C
- K to C:
K − 273.15 = C

**Your function must return a value**

It's not necessary to print the result on screen, 
however to test your function you are free to print the result
*/

function farenheitToCelsius(value) {
  return ((value - 32) * 5) / 9;
}

function celsiusToFarenheit(value) {
  return ((value * 9) / 5) + 32;
}

function farenheitToKelvin(value) {
  const toCelsius = convert("F", "C", value);
  return celsiusToKelvin(toCelsius);
}

function kelvinToCelsius(value) {
  return value - 273.15;
}

function celsiusToKelvin(value) {
  return value + 273.15;
}

function kelvinToFarenheit(value) {
  const toCelsisus = convert("K", "C", value);
  return celsiusToFarenheit(toCelsisus);
}

function temperatureConverter(conversionFormat, value) {
  switch (conversionFormat) {
    case "F-C": return farenheitToCelsius(value);
    case "C-F": return celsiusToFarenheit(value);
    case "F-K": return farenheitToKelvin(value);
    case "K-C": return kelvinToCelsius(value);
    case "C-K": return celsiusToKelvin(value);
    case "K-F": return kelvinToFarenheit(value);
    case "C-C": return value;
    case "K-K": return value;
    case "F-F": return value;
    default: return NaN;
  }
}

function convert(from, to, value) {
  const isFormNotNull = from === '';
  const isToNotNull = to === '';

  if (isFormNotNull || isToNotNull) {
    return NaN;
  }

  const conversionFormat = from + "-" + to;
  return temperatureConverter(conversionFormat, +value);
}

function prepareMessage(from, to, value, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  const messageSegment = isTestPassing + "conversion of " + value + " " + from;
  const expectedResult = " to " + to + " is " + expected;
  return messageSegment + expectedResult + " actual:" + actual;
}

function testConvert(from, to, value, expected) {
  const actual = convert(from, to, value);
  console.log(prepareMessage(from, to, value, actual, expected));
}

function testAll() {
  testConvert("s", "s", 0, "NaN");
  testConvert("K", "C", "100", -173.14999999999998);
  testConvert("K", "C", 100, -173.14999999999998);
  testConvert("F", "C", -40, -40);
  testConvert('C', 'C', 0, 0);
  testConvert('C', 'C', "g", NaN);
  testConvert('C', 'F', 37, 98.6);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('a', 'K', 0, NaN);
  testConvert('s', 's', 100, NaN);
  testConvert('C', 'C', "0", 0);
}

testAll();

// to be uploaded