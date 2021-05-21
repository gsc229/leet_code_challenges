const { set1, set2, set3 } = require('./test')

const productExceptSelf = (nums) => {

  /* const firstZeroIndex = nums.indexOf(0)
  const lastZeroIndex = nums.lastIndexOf(0)

  console.log({firstZeroIndex, lastZeroIndex})

  if(firstZeroIndex !== lastZeroIndex){
    nums.forEach((num, i) => nums[i] = 0)
    return nums
  } */

  const size = nums.length
  if(size === 0 || size === 1){
    return []
  }

  const productArr = []
  let product = 1

  for(let i = 0; i < size; i++){
    productArr.push(product)
    product *= nums[i]
  }

  product = 1

  for(let i = size - 1; i >= 0; i--){
    productArr[i] *= product
    product *= nums[i]
  }

  return productArr
}


console.log(productExceptSelf(set2.nums))