// we need an unsorted array
// we need a sorted array to track what has already been done?
// on the first pass, we need to go through the array and find the lowest value
// move the first value to the begining of the array
// on the second pass, we need to go through the array and find the next lowest value
// move the second value to the second position of the array
// and repeat n number of times

//animation notes:
// in every pass, highlight the smallest number index
// after a full pass, move the smallest to the begining (i.e. swap)
// highlight the ones that have already been sorted

import type {
  SelectionSortState,
  Swaps,
  ArrayHistory,
  ArraySize
} from "../../types/typesSort"

export const selectionSort = (unsortedArray: number[]): SelectionSortState => {
  const currentArrayState = [...unsortedArray]
  const arrayStateHistory: ArrayHistory[] = [[[...unsortedArray],[0]]]
  const smallestIndexHistory: number[] = []
  const swapIndexes:Swaps[] = []
  const endPasses: ArrayHistory = [[],[]]
  
  const moveArrayItem = (array: number[], fromIndex: number, toIndex: number) => {
    // remove the smallest element from the array and save it to a variable
    const [item] = array.splice(fromIndex, 1);
    array.splice(toIndex, 0, item);
    return array;
  }
  
  for (let i = 0; i < unsortedArray.length - 1; i++) {
    let indexOfSmallest = i;
    
    // starting at the (i+1)th position so we don't include the first value in the array
    for (let j = i+1; j < unsortedArray.length; j++) {
      if (unsortedArray[j] < unsortedArray[indexOfSmallest]) {
        indexOfSmallest = j;
        smallestIndexHistory.push(indexOfSmallest)
        swapIndexes.push([i,j])
      }
      // log every state of the algorithm
      arrayStateHistory.push([[...unsortedArray],[indexOfSmallest]])
    }
    // after each run of the inner loop we have the location of the next smallest value
    // we need to take this and add it to the beginning
    moveArrayItem(unsortedArray, indexOfSmallest, i)
  }
  // Add the final sorted state
  arrayStateHistory.push([[...unsortedArray], [unsortedArray.length - 1]])

  const sortedArray = [...unsortedArray]
  


  return {
    sorted: sortedArray,
    stateHistory: arrayStateHistory,
    smallestIndexHistory: smallestIndexHistory,
    swapIndexes: swapIndexes
  }
}

console.log(selectionSort([59,24, 3,6,7,2,8,49,32,20]))