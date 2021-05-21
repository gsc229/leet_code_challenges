const { set1, set2, set3, set4, set5 } = require('./test')

const trap = (height) => {

  let totalArea = 0
  let size = height.length

  let left = 0
  let right = size - 1

  let leftMax = 0
  let rightMax = 0

  while(left < right){
    if(height[left] < height[right]){
      height[left] >= leftMax ? (leftMax = height[left]) : totalArea += (leftMax - height[left])
      left++
    } else {
      height[right] >= rightMax ? (rightMax = height[right]) : totalArea += (rightMax - height[right])
      right--
    }
  }
  return totalArea
}

const result = trap(set1.height)

console.log({result, correctAnswer: set1.answer, correct: set1.answer === result, height: set1.height})