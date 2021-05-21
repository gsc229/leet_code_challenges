const { set1, set2, set3 } = require('./test')

const productExceptSelf = (nums) => {

  const firstZeroIndex = nums.indexOf(0)
  const lastZeroIndex = nums.lastIndexOf(0)

  console.log({firstZeroIndex, lastZeroIndex})

  if(firstZeroIndex !== lastZeroIndex){
    nums.forEach((num, i) => nums[i] = 0)
    return nums
  }

  const size = nums.length

  let product = nums.reduce((accum, curr) => {
    if(curr === 0) return accum *= 1
    return accum *= curr
  }, 1)

  console.log({product})

  if(firstZeroIndex !== -1){

    nums.forEach((num, i) => {
      if(num === 0){
        nums[i] = product
      } else {
        nums[i] = 0
      }
    })

    return nums

  }
  

  for(let i = 0; i < size; i++){
    nums[i] = product / nums[i]
  }

  return nums
  
}


console.log(productExceptSelf(set3.nums))

// [2, 3, 5]
//  3  2  3
//  5  5  2
// [15, 10, 6]