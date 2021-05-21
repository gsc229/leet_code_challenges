const { set1, set2, set3, set4, set5 } = require('./test')

const trap = (height) => {


  let totalArea = 0  

  let left = 0
  let right = 1


  while(left !== right && right < height.length){
    console.log({left, right})
    if(height[left] > height[right] && right === height.length - 1){

      if(height[right] > 0){
        const waterLevel = height[right]
        const section = height.slice(left + 1, right)
        console.log({section})
        const newArea = section.reduce((accum, curr) => {
          if(curr < waterLevel) return accum += (waterLevel - curr)
          return 0
         }, 0)

         if(newArea > 0){
           totalArea+= newArea
           return totalArea

         }


      }
      console.log("FIRST IF")
      left++
      right = left
      
    }

    if(right - left > 1 && height[right] >= height[left] && height[left] > 0){
      
      const waterLevel = Math.min(height[left], height[right])
      const section = height.slice(left + 1, right)
      const newArea = section.reduce((accum, curr) => {
       if(curr < waterLevel) return accum += (waterLevel - curr)
       return 0
      }, 0)

      totalArea += newArea
      console.log({newArea, totalArea})

      left = right
      
    } 

    if(height[left] === 0){
      left++
    }

    right++
    
  }

  return totalArea
}

const result = trap(set5.height)

console.log({result, correctAnswer: set5.answer, correct: set5.answer === result, height: set5.height})