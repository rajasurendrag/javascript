function compoundIntrest(principle, rateOfIntrest, period) {
  if (period < 2) {
    return (principle * rateOfIntrest) / 100;
  }
  const totalAmount = principle + (principle * rateOfIntrest) / 100;

  return totalAmount - principle + compoundIntrest(totalAmount, rateOfIntrest, period - 1);
}

console.log(compoundIntrest(1000, 2, 2));
console.log(compoundIntrest(100, 4, 2));
// 
// 
// 
// 
// 
// 
