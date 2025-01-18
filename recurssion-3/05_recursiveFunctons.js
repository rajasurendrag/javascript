function factorial(term) {
  if (term < 2) {
    return 1;
  }

  return term * factorial(term - 1)
}

function sumOfAp(firstTerm, difference, n) {
  if(n === 1) {
    return firstTerm;
  }
  
  return firstTerm + sumOfAp(firstTerm + difference, difference, n - 1);
}

function nthTermOfAp(firstTerm, difference, n) {
  if(n === 1) {
    return firstTerm;
  }
  
  return nthTermOfAp(firstTerm + difference, difference, n - 1);
}

function slice(string, start, end) {
  if (start === end) {
    return string[end];
  }
  
  return slice(string, start, end - 1) + string[end] ;
}

function additionOfTwo(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function rangeOfEvenNumbers(start, end) {
if (start <= end) {
    console.log(start + (start % 2));
    rangeOfEvenNumbers(additionOfTwo(start,2), end);
  }
}

function isEven(number) {
  if (number < 2) {
    return number === 0;
  }

  return isEven(number - 2);
}


function nthFibonacciTerm(n) {
  if (n < 4) {
    return n === 1 ? 0 : 1;
  }

  return nthFibonacciTerm(n - 1) + nthFibonacciTerm(n - 2);
}


function reverse(string, index) {
  if (index === 0) {
    return '';
  }

  return string[index - 1] + reverse(string, index - 1);
}


