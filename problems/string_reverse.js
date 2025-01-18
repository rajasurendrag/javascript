const unshiftElement = function (array, element) {
  return array.concat(element);
}

const reverseString = function (string) {
  return string.split('').reduce(unshiftElement, []).join('');
}

console.log(reverseString("surendra"));