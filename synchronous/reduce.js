const nums = [1, 2, 3, 4];

function sum(a, b) {
  return a + b;
}

function reduce(fn, initial, array) {
  let acc = initial;

  for (var i = 0; i < array.length; i += 1) {
    acc = fn(acc, array[i]);
  }

  return acc;
}

const sumArray = reduce.bind(null, sum, 0);

console.log(sumArray(nums));
console.log(nums);
