function isEven(number) {
  if (number < 2) {
    return number === 0;
  }

  return isEven(number - 2);
}