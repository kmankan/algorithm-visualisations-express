// using recursion

const unsortedArray: number[] = [94,3,5,7,2,11,93,4,1]
const sortedArray: number[] = []

type InsertionSortState = {
  unsortedArray: number[],
  sortedArray: number[],
}

export const insertionSort = (unsortedArray: number[], sortedArray: number[], callback: (state: InsertionSortState) => void): number[] => {
  // base case
  if (unsortedArray.length <= 0) {
    return sortedArray
  }
  
  // insert the first element of the unsorted array into the sorted array
  for (let i=0; i < sortedArray.length; i++){
    if (unsortedArray[0] < sortedArray[i]) {
      sortedArray.splice(i, 0, unsortedArray[0]);
      unsortedArray.shift();
      callback({unsortedArray, sortedArray})
      return insertionSort(unsortedArray, sortedArray, callback)
    }
  }

  sortedArray = [unsortedArray[0], ...sortedArray]
  unsortedArray.shift();
  callback({unsortedArray, sortedArray})
  return insertionSort(unsortedArray, sortedArray, callback)
}