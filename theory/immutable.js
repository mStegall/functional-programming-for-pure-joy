const nums = [1, 2, 3, 4];

function getSquares(array) {
  const result = [];

  for (var i = 0; i < array.length; i += 1) {
    result.push(array[i] * array[i]);
  }

  return result;
}

console.log(getSquares(nums));
console.log(nums);
