function findNearestLionPos(zebraIndex, jungle) {
  const searchDistance = 1;
  return __findNearestLionPos(zebraIndex, jungle, searchDistance);
}

function __findNearestLionPos(zebraIndex, jungle, searchDistance) {
  if (searchDistance > jungle.length) {
    return -1;
  }

  if (jungle[zebraIndex - searchDistance] === "L") {
    return (zebraIndex - searchDistance);
  }

  if (jungle[searchDistance + zebraIndex] === "L") {
    return (searchDistance + zebraIndex);
  }

  return __findNearestLionPos(zebraIndex, jungle, searchDistance + 1);
}

function __findPosOfZebraInDanger(jungle, closestZebra, closestLion, lionPosition, distanceToLion, index) {
  
  if (index > jungle.length) {
    return lionPosition === -1 || lionPosition === jungle.length ? -1 : closestZebra;
  }

  if (jungle[index] === "Z") {
    lionPosition = findNearestLionPos(index, jungle);
    distanceToLion = Math.abs(lionPosition - index);
  }

  if (distanceToLion === 1) {
    return lionPosition;
  }
  
  if (distanceToLion < closestLion) {
    return __findPosOfZebraInDanger(jungle, index, distanceToLion, lionPosition, distanceToLion, index + 1);
  }

  return __findPosOfZebraInDanger(jungle, closestZebra, closestLion, lionPosition, distanceToLion, index + 1);
}

function findPosOfZebraInDanger(jungle) {
  const ZERO = 0;
  return __findPosOfZebraInDanger(jungle, ZERO, jungle.length, ZERO, jungle.length, ZERO);
}

// -----------------test fragment starts from here-----------------
function testFindPosOfZebraInDanger(number, expected) {
  const result = findPosOfZebraInDanger(number);
  console.log(result === expected ? '✅' : '❌', result, expected);
}

function testAll() {
  testFindPosOfZebraInDanger("LZ", 1);
  testFindPosOfZebraInDanger("ZZL", 1);
  testFindPosOfZebraInDanger("LL", 0);
  testFindPosOfZebraInDanger("ZZ", -1);
  testFindPosOfZebraInDanger("ZZL", 1);
  testFindPosOfZebraInDanger("LZ L Z", 1);
  testFindPosOfZebraInDanger("Z L", 0);
  testFindPosOfZebraInDanger("Z   L  Z", 7)
  testFindPosOfZebraInDanger("L Z", 2);
  testFindPosOfZebraInDanger("L     Z", 6);
  testFindPosOfZebraInDanger("L", 0);
  testFindPosOfZebraInDanger("Z", -1);
  testFindPosOfZebraInDanger("   ", 0);
  testFindPosOfZebraInDanger("Z  L  Z", 0);
  testFindPosOfZebraInDanger("L Z Z Z", 2);
  testFindPosOfZebraInDanger("Z L L L", 0);
  testFindPosOfZebraInDanger("", -1);
  testFindPosOfZebraInDanger("    Z               L    ", 4);
  testFindPosOfZebraInDanger("L   Z    L    Z    L", 4);
}

testAll();