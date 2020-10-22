var mergeKLists = function(lists) {
    let mergedList = []
    
    for(let i = 0; i < lists.length; i ++){
      mergedList = [...mergedList, ...lists[i]]
    }

    return mergedList.sort()
}


const lists1 = [[1,4,5],[1,3,4],[2,6]]


console.log(mergeKLists(lists1))