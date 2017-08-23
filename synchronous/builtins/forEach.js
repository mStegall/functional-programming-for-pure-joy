const nums = [1, 2, 3, 4];

function square(num) {
  return num * num;
}

function logSquare(num){
    console.log(square(num))
}

nums.forEach(logSquare)