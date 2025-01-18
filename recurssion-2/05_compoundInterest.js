function compoundIntrest(principle, intrest, period) {
  if (period === 0) {
    return 0;
  }

  const simpleIntrest = (principle * intrest) / 100;
  const amount = principle + simpleIntrest;

  return simpleIntrest + compoundIntrest(amount, intrest, period - 1);
}

function prepareMessage(principal, rate, time, actual, expected) {
  const isTestPassing = actual === expected ? "✅" : "❌";
  let messageSegment = isTestPassing + "CI of principle " + principal;
  messageSegment += " for time " + time + " with intrest " + rate + " is ";
  const expectedResult = expected + " and is ";

  return messageSegment + expectedResult + actual;
}

function testCompoundIntrest(principal, rate, time, expected) {
  const actual = compoundIntrest(principal, rate, time);
  console.log(prepareMessage(principal, rate, time, actual, expected));
}

function testAll() {
  testCompoundIntrest(0, 0, 0, 0);
  testCompoundIntrest(0, 0, 1, 0);
  testCompoundIntrest(1000, 5, 5, 276.2815625);
  testCompoundIntrest(100, 1, 1, 1);
  testCompoundIntrest(100, 1, 0, 0);
  testCompoundIntrest(100, 0, 2, 0);
  testCompoundIntrest(100, 4, 1, 4);
  testCompoundIntrest(100, 5, 1, 5);
  testCompoundIntrest(100, 5, 3, 15.7625);
  testCompoundIntrest(100, 5, 2, 10.25);
  testCompoundIntrest(1040, 3, 5, 165.64503727199985);
}

testAll();