/*
Sorts in place
*/
function quickSort(inputArray) {
  const partition = (arr, start, end) => {
    const pivotIndex = Math.floor((start + end) / 2);
    const pivot = arr[pivotIndex];
    let left = start, right = end;

    while(left <= right) {
      while (arr[left] < pivot) left += 1;
      while (arr[right] > pivot) right -= 1;
      if (left > right) break;

      [arr[left], arr[right]] = [arr[right], arr[left]];
      left += 1;
      right -= 1;
    }

    // [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    return left; // the new location of the pivot element
  }

  const sortSubArray = (arr, start, end) => {
    const pivotIndex = partition(arr, start, end);
    if (start < pivotIndex - 1) {
      sortSubArray(arr, start, pivotIndex - 1);
    }
    if (pivotIndex < end) {
      sortSubArray(arr, pivotIndex, end);
    }
  }

  sortSubArray(inputArray, 0, inputArray.length - 1);
}

const arr = [7, 3, 9, 8, 5, 1];
quickSort(arr);
console.log(arr);