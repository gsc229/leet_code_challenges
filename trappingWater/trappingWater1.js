const { set1, set2, set3, set4 } = require('./test')



const trap = (height) => {

  let waterArea = 0

  let leftIndex = 0
  let rightIndex = 1

  

  const closures = []

  while(leftIndex <  height.length){

    rightIndex = leftIndex + 1

    if(height[leftIndex] > 0){
      let closure = false

      while(!closure && rightIndex < height.length){

        if(height[rightIndex] >= height[leftIndex] || leftIndex === 0 && rightIndex === height.length - 1){
          closures.push([leftIndex, rightIndex])
          closure = true
          leftIndex = rightIndex
        } else{
          rightIndex++
        }
      }

    } 

    if(rightIndex === height.length){
      leftIndex++
    } else{
      leftIndex = rightIndex
    }

    
  } 

  closures.forEach(width => {

    const waterLevel = Math.min(height[width[0]], height[width[1]])

    const section = height.slice(width[0] + 1, width[1])

    const newArea = section.reduce((accum, curr) => {
      return accum + (waterLevel - curr)
    }, 0)

    if(newArea > 0) waterArea += newArea

  })
  
  return waterArea

}


console.log(trap(set4.height), {answer: set4.answer})