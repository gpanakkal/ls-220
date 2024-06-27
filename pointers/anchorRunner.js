/*
Given an array of positive integers and zeroes, our task is
to move all zeroes to the end of the array while preserving
the relative order of non-zero elements. The goal is to solve
this problem in constant space complexity.

If no zeroes are present in the array, no changes are needed.

Example:
Input: nums = [0, 2, 0, 4, 8]
Output: [2, 4, 8, 0, 0]

Rules
- Start both pointers at index 0
- While `runner` has not reached the end of the array:
  - If runner is not on a zero and anchor is on a zero, swap the two values
  - if `runner` is on a zero, advance it one step
  - if `anchor` is not on a zero, advance it one step
- return the modified array
*/

const zeroesToEnd = (nums) => {
  if (!Array.isArray(nums)) return null;
  let anchor = 0;
  const modified = [...nums];
  for (let runner = 0; runner < modified.length; runner += 1) {
    if (modified[runner] !== 0) {
      [modified[anchor], modified[runner]] = [modified[runner], modified[anchor]];
      anchor += 1;
    }
  }
  return modified;
};

const examples = [
  {
    in: [[0, 2, 0, 4, 8]],
    out: [2, 4, 8, 0, 0],
  },
  {
    in: [[10, 7, 8, 4, 0]],
    out: [10, 7, 8, 4, 0],
  },
  {
    in: [[1, 0, 0, 2]],
    out: [1, 2, 0, 0],
  },
  {
    in: [[0, 0, 0, 0, 0, 0, 5, 2]],
    out: [2, 5, 0, 0, 0, 0, 0, 0],
  },
  {
    in: [[3, 5, 2, 0, 0, 7, 9]],
    out: [3, 5, 2, 7, 9, 0, 0],
  },
  {
    in: [[9, 19, 20, 23, 32]],
    out: [9, 19, 20, 23, 32],
  },
  {
    in: [[0, 0, 0, NaN]],
    out: [NaN, 0, 0, 0],
  },
  {
    in: [[0, 0, 56, 0, 72]],
    out: [56, 72, 0, 0, 0],
  },
];

const results = examples.forEach(({ in: input, out: expected }) => {
  const observed = zeroesToEnd(...input);
                                expected;
});
