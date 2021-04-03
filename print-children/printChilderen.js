const familyTree = {
  name: 'Steve',
  children: [
    {
    name: 'Bob', 
    children: [
      {name: 'Sally', children: []
    }]
    
    },
    {
      name: 'Jenny',
      children: [
        {
          name: 'Dan',
          children: [
            {
              name: 'Sara',
              children: []
            }
          ]
        }
      ]
    }
  ]
}


let calls = 0
const recursivePrintChildren = (tree) => {
  calls += 1
  if(!tree.children.length) return

  tree.children.forEach(child => {
    console.log( {'PARENET: ': tree.name, call: calls}, JSON.stringify({child}, null, 2))
    console.log('============== RECURSIVE ======================')
    return recursivePrintChildren(child)
  });


}

calls = 0
recursivePrintChildren(familyTree)

const stackPrintChildren = (tree) => {

  const stack = [tree]

  while(stack.length){

    const current = stack.pop()
    current.children.forEach(child => {
      stack.push(child)
      console.log( {'PARENET: ': current.name, call: calls}, JSON.stringify({child}, null, 2))
      console.log('================ STACK WHILE LOOP  =======================')
    })

  }

}

stackPrintChildren(familyTree)



const queuePrintChildren = (tree) => {
  const queue = [tree]

  while(queue.length){

    const current = queue.shift()
    current.children.forEach(child => {
      queue.push(child)
      console.log( {'PARENET: ': current.name, call: calls}, JSON.stringify({child}, null, 2))
      console.log('================ QUEUE WHILE LOOP  =======================')
    })

  }
}


queuePrintChildren(familyTree)