const sumOfProducts = (sum, product) => sum + product;

const multiplyExp = (expression) => {
  const [operand1, operand2] = expression.match(/\d+/g).map((num) => +num);

  return operand1 * operand2;
};

export const part1 = (memory) => {
  const validInstructions = memory.match(/mul\(\d{1,3},\d{1,3}\)/g) || [];

  return validInstructions.map(multiplyExp).reduce(sumOfProducts, 0);
};

export const part2 = (memory) => {
  const validMemory = memory.match(/(do\(\)|^).*?(don't|$)/gs);
  return part1(validMemory.join(""));
};
