/* Sorts in place */
function quickSort(inputArray) {
  const partition = (arr, start, end) => {
    const pivotIndex = Math.floor((start + end) / 2);
    let pivotEnd = pivotIndex, left = start, right = end;
    const pivot = arr[pivotIndex];

    while(left <= right) {
      while (arr[left] <= pivot) left += 1;
      while (arr[right] > pivot) right -= 1;
      if (left >= right) break;

      [arr[left], arr[right]] = [arr[right], arr[left]];
      if (left === pivotEnd) pivotEnd = right - 1
      else if (right === pivotEnd) pivotEnd = left + 1
      left += 1;
      right -= 1;
    }
    return pivotEnd;
  }

  const sortSubArray = (arr, start, end) => {
    console.log({beforePartition: arr.slice(), start, end})
    if (start === end) return;
    const pivotIndex = partition(arr, start, end);
    console.log({ afterPartition: [...arr], pivotIndex })
    if (start < pivotIndex - 1) sortSubArray(arr, start, pivotIndex - 1);
    if (pivotIndex < end) sortSubArray(arr, pivotIndex + 1, end);
  }

  sortSubArray(inputArray, 0, inputArray.length - 1);
}

// const arr = [7, 3, 9, 8, 5, 1];
// const nums = [2, -1, 8, 17, 5.5, 6, 0];
// const strs = ["flower","flow","flight"];
// const seqs = ["acc","aaa","aaba"];
// quickSort(arr);
// console.log(arr);
// quickSort(nums);
// console.log(nums);
// quickSort(strs);
// console.log(strs);
// quickSort(seqs);
// console.log(seqs);

// nums2 = [3, -2, -1];
// quickSort(nums2)
// console.log(nums2)
nums3 = [1, 2, 1, 4, 5]
quickSort(nums3)
console.log(nums3)