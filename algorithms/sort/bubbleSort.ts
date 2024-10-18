// Go through the array, one value at a time.
// For each value, compare the value with the next value.
// If the value is higher than the next one, swap the values so that the highest value comes last.
// Go through the array as many times as there are values in the array.
// An inner loop that goes through the array and swaps values if the first value is higher than the next value. This loop must loop through one less value each time it runs.
// An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n-1 times.

// Types
import type {
  BubbleSortState,
  Swaps,
  ArrayHistory
} from "../../types/typesSort"

export const BubbleSort = (unsortedArray: number[]): BubbleSortState => {
  const arrayLength = unsortedArray.length
  const swaps:Swaps[] = []
  const swapIndexes:Swaps[] = []
  const currentArrayState = [...unsortedArray]
  const arrayStateHistory: ArrayHistory = [[...unsortedArray]]

  // function onSwap(arrayState: number[]) {
  //   arrayStateHistory.push(arrayState)
  // }

  for (let i=0; i < arrayLength - 1; i++) {
    let swapped = false;
    for (let j=0; j < arrayLength - i - 1; j++) {
      //console.log(currentArrayState)
      if (currentArrayState[j] > currentArrayState[j+1]) {
        // swap the position of two items
        [currentArrayState[j], currentArrayState[j+1]] = [currentArrayState[j+1], currentArrayState[j]];
        // add the swaped pairs to the swap tracking history
        swaps.push([currentArrayState[j], currentArrayState[j+1]])
        swapIndexes.push([j, j+1])
        // add the current array state to an array tracking its history
        arrayStateHistory.push([...currentArrayState])
        //onSwap(currentArrayState)
        //console.log('swapped', currentArrayState[j], 'and', currentArrayState[j+1])
        swapped = true;
      }
    }
    //console.log(`End of pass ${i+1}:`, currentArrayState)
    if (!swapped) {
      //console.log(`\nArray is sorted after ${i+1} passes`)
      break // if no swapping occurs, the array is sorted
    }
  }

  const sortedArray = [...currentArrayState]

  return {
    sorted: sortedArray,
    stateHistory: arrayStateHistory,
    swaps: swaps,
    swapIndexes: swapIndexes 
  }
}