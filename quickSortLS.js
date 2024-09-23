function partition(arr, low, high) {
  const pivotIndex = Math.floor((low + high) / 2);
  const pivot = arr[pivotIndex];
  let left = low;
  let right = high;

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left > right) {
      break;
    }

    // Swap values at left and right pointers
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  // Return the pivot index
  return left;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  console.log({ beforePartition: [...arr], low, high })
  const pivotIndex = partition(arr, low, high);
  console.log({ afterPartition: [...arr], pivotIndex })
  if (low < pivotIndex - 1) {
    quickSort(arr, low, pivotIndex - 1);
  }
  if (pivotIndex < high) {
    quickSort(arr, pivotIndex, high);
  }
}

// const arr = [7, 3, 9, 8, 5, 1];
// quickSort(arr);
// console.log(arr); // Output: [1, 3, 5, 7, 8, 9]

const nums = [1, 2, 1, 4, 5];
quickSort(nums)
console.log(nums)