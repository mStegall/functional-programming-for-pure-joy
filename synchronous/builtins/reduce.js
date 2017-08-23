const nums = [1, 2, 3, 4];

function sum(a, b) {
  return a + b;
}

console.log(nums.reduce(sum, 0));
console.log(nums);
