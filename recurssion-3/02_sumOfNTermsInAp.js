function sumOfAp(firstTerm, difference, n) {
  if(n === 1) {
    return firstTerm;
  }
  
  return firstTerm + sumOfAp(firstTerm + difference, difference, n - 1);
}

