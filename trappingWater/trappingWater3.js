const { set1, set2, set3, set4, set5 } = require('./test')

const trap = (height) => {


  let totalArea = 0
  let size = height.length

  const leftMax = new Array(size)
  const rightMax = new Array(size)

  leftMax[0] = height[0]
  for(let i = 1; i < size; i++){
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
  }

  rightMax[size - 1] = height[size - 1]
  for(let i = size -2; i >= 0; i--){
    rightMax[i] = Math.max(height[i], rightMax[i + 1])
  }

  for(let i = 1; i < size -1; i++){
    totalArea += Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  
  console.log({leftMax, rightMax, height})
  return totalArea
}

const result = trap(set1.height)

console.log({result, correctAnswer: set1.answer, correct: set1.answer === result, height: set1.height})