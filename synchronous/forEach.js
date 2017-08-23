const nums = [1, 2, 3, 4];

function forEach(fn, array) {
  for (var i = 0; i < array.length; i += 1) {
    fn(array[i]);
  }
}

function square(num) {
  return num * num;
}

function logSquare(num){
    console.log(square(num))
}

forEach(logSquare, nums)
