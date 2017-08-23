const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isOdd(num) {
  return num % 2 === 1;
}

console.log(nums.filter(isOdd));
