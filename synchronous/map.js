const nums = [1, 2, 3, 4];

function map(fn, array) {
  const result = [];

  for (var i = 0; i < array.length; i += 1) {
    result.push(fn(array[i]));
  }

  return result;
}

function square(num) {
  return num * num;
}

function getSquares(array) {
  return map(square, array);
}
// const getSquares = map.bind(null, square);

console.log(getSquares(nums));
console.log(nums);
