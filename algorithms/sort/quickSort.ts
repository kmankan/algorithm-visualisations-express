// take an array
// divide it in half (pivot point)
// run quick sort
// handle the base case

const unsortedExample = [4, 3, 5, 9, 10, 44, 1, 2]

export interface QuickSortState {
  array: number[],
  pivotValue: number,
  left: number[],
  right: number[]
}

// quicksort takes in an array and returns a sorted array
export function quicksort(array: number[], callback?: (state: QuickSortState) => void): number[] {
  // base case
  if (array.length <= 1) {
    return array
  }

  const pivot = Math.floor(array.length / 2)
  const pivotValue = array[pivot]

  const left: number[] = []
  const right: number[] = []
  const toSort = array.toSpliced(pivot, 1) // this deletes the pivot.

  // now we need to do sorting
  // go through all the elements of toSort
  for (let i = 0; i < toSort.length; i++) {
    const elementToSort = toSort[i]
    if (elementToSort < pivotValue) { left.push(elementToSort) }
    else right.push(elementToSort)
}

  const currentState = {
    array,
    pivotValue,
    left,
    right
  }

  if (callback) {callback(currentState)}

  // Do Quicksort recursively on both left and right
  const sortedLeft = quicksort(left,callback)
  const sortedRight = quicksort(right, callback)

  // Construct the array
  return [...sortedLeft, pivotValue, ...sortedRight]
}

function logState(state: QuickSortState) {
    console.log(state)
}

const sortedExample = quicksort(unsortedExample, logState)

console.log("unsorted:", unsortedExample, "sorted:", sortedExample)
