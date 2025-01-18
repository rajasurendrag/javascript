function nthTermOfAp(firstTerm, difference, n) {
  if(n === 1) {
    return firstTerm;
  }
  
  return nthTermOfAp(firstTerm + difference, difference, n - 1);
}
