/*
// Write a function that takes an array of integers and an integer k
// as inputs and returns the maximum sum of any consecutive k elements in
// the array. If the array contains less than k elements, the
// function should return null.
// If the integer k is less than 1 return null as well.

Rules:
- initialize the left pointer to 0 and the right pointer to 0
- initialize a `max` variable to the first value in the array
- iterate forward, incrementing `right` until right === arr.length:
  - if (right - left < k):
    - add the value at `right` to `sum`
  else:
    - increment `left`
    - get a new sum by subtracting the value at `left` and adding the value at `right`
    - if the new sum is greater than `max`, reassign `max` to the new sum
- return `max`
*/

const maximumSum = (nums, k) => {
  if (nums.length < k || k < 1) return null;
  let left = 0, right = k - 1;
  let max = nums[0];
  for (let i = 1; i <= right; i += 1) max += nums[i];

  while (right < nums.length - 1) {
    let sum = max - nums[left];
    left += 1;
    right += 1;
    sum += nums[right];
    if (sum > max) max = sum;
  }
  return max;
}

const examples = [
  {
    in: [[3, 2, 6, 5, 1, 10, -2], 4],
    out: 22,
  },
  {
    in: [[1, 2, 3], 4],
    out: null,
  },
  {
    in: [[1, 2, 3], 0],
    out: null,
  },
  {
    in: [[1, 2, 3, 4, 5, 6], 4],
    out: 18,
  },
  // {
  //   in: [[10, 7, 8, 4, 0]],
  //   out: [10, 7, 8, 4, 0],
  // },
  // {
  //   in: [[3, 5, 2, 0, 0, 7, 9]],
  //   out: [3, 5, 2, 7, 9, 0, 0],
  // },
  // {
  //   in: [[9, 19, 20, 23, 32]],
  //   out: [9, 19, 20, 23, 32],
  // },
  // {
  //   in: [[0, 0, 0, NaN]],
  //   out: [NaN, 0, 0, 0],
  // },
  // {
  //   in: [[0, 0, 56, 0, 72]],
  //   out: [56, 72, 0, 0, 0],
  // },
];

const results = examples.forEach(({ in: input, out: expected }) => {
  const observed = maximumSum(...input);
                               expected;
});