const sortedArray = [3, 5, 13, 15, 24, 25, 31, 32, 37, 39, 40, 42, 43, 58]

export const binarySearch = (sortedArray: number[], e: number) => {
	// define the target element e
  let targetValue = e;
  
  // define the start and end indices
	let startIndex = 0;
	let endIndex = sortedArray.length - 1 //because .length() counts from 1 to n

  while (startIndex <= endIndex) {
    // Step 1: Find the middle index
	  let middleIndex = startIndex + Math.floor(endIndex - startIndex / 2);
    // Step 2: See if the middle index of the array has the target
    // if it does return the index, if not move to Step 3
    if (sortedArray[middleIndex] === targetValue) {
      console.log(`Target value found at index: ${middleIndex}`)
      return middleIndex
    }
    // Step 3: Decide which half from the middle to keep
      // if the target value is greater than the value of the middle index,
        // change the start index to be +1 of the middle index and keep the end index as is
    if (targetValue > sortedArray[middleIndex]) {
      startIndex = middleIndex + 1
    } else {
      // if the target value is less than the value of the middle index,
        // change the end index to be -1 of the middle index and the keep the start index as is
      endIndex = middleIndex - 1
    }
  }
  console.log("targetValue not found in array")
  return
}