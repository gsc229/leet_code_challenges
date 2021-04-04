const factorial = (num) => {

  if(num === 1) return 1

  // 10 * 9 * 8 * 7 * 6.... n * n -1 * n - 2 * n - 3

  return num * factorial(num - 1)

}


console.log(factorial(3))