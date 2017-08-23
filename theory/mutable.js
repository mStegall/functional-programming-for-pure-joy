const nums = [1, 2, 3, 4];

function getSquares(array) {
  for (var i = 0; i < array.length; i += 1) {
    array[i] = array[i] * array[i];
  }

  return array;
}

console.log(getSquares(nums));
console.log(nums);
