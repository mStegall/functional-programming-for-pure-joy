const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter(fn, array) {
  const result = [];

  for (var i = 0; i < array.length; i += 1) {
    if (fn(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

function isOdd(num) {
  return num % 2 === 1;
}

function getOdds(array) {
  return filter(isOdd, array);
}
// const getOdds = filter.bind(null, isOdd);

console.log(getOdds(nums));
