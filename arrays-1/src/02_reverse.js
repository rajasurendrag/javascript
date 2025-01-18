// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters

export const appendAtEnd = (acc, element) => {
  const group = [...acc];
  group.push(element);

  return group;
};

export const reverse = (array) => array.reduceRight(appendAtEnd, []);
