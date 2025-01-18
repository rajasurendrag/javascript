// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]
// extractDigits(12.3) => [1, 2, 3]

export function extractDigits(number) {
  let numberToExtract = Math.abs(number);
  const digits = [];

  while (numberToExtract > 9) {
    const lastDigit = numberToExtract % 10;

    digits.unshift(lastDigit);
    numberToExtract = Math.floor(numberToExtract / 10);
  }

  digits.unshift(numberToExtract);
  return digits;
}
