/*
Take a sorted array of distinct integers and a target value as input. Return the index
where the target value is found in the array, or the index where it would need to be
inserted to preserve sort order if it were not found.
*/

const findInsertPosition = (nums, target) => {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}


console.log(findInsertPosition([3, 5, 7, 9, 11], 9)); // 3
console.log(findInsertPosition([3, 5, 7, 9, 11], 2)); // 0
console.log(findInsertPosition([3, 5, 7, 9, 11], 12)); // 5