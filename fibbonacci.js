let cycles = 0
const fib = (k, memo, aOrb) => {
  cycles ++

  memo = memo || {}

  console.log({k, memoK: memo[k], aOrb, cycles})
  if(memo[k]) return memo[k]

  if(k === 0){
    console.log({return: 0})
    return 0
  }

  if(k <= 2){
    console.log({return: 1})
    return 1
  }
  
  return memo[k] = fib(k - 2, memo, "a") + fib(k - 1, memo, "b")

}

/* 23416728348467684 */
console.log(fib(80, null, "start"))