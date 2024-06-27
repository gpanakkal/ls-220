/* Problem:
Given an array sorted in ascending order, find two numbers that sum to a target number
and return them. If such a pair is not found, return null.

The relative order of the two numbers should be preserved in the returned array.

Input: array of numbers sort asc, and a target sum
Output: a double of numbers that sum to the target, sorted asc, or null

Rules:
- Use two pointers to define a window
- Each time the pointers move, check the sum of the two values at the pointers
- Start the first pointer at index 0, and the second at the end of the array
- If the resulting sum is larger than the target, retreat the end pointer
- If the resulting sum is smaller than the target, advance the start pointer
- If the start pointer reaches the end pointer, advance the end pointer?
- If the resulting sum is greater than the target and the end pointer retreats onto the
  start pointer, return null

Data structure: Two pointers

Algorithm:
1. Verify the input is an array of length >= 2; else return null
2. Initialize the pointers to the beginning and end indices of the array and calculate the sum
3. While sum !== target and end !== start:
  - If the sum equals `target`, return [arr[start], arr[end]]
  - Else if the sum is greater than `target`, retreat the end pointer and recheck sum
  - Else advance the end pointer
  - return null
*/

const twoSum = (nums, target) => {
  if (!Array.isArray(nums) || nums.length < 2) return null;
  let start = 0, end = nums.length - 1;
  while (start !== end) {
    const sum = nums[start] + nums[end];
    if (sum === target) return [nums[start], nums[end]];
    else if (sum > target) end -= 1;
    else start += 1;
  }
  return null;
};

const examples = [
  {
    in: [[1, 3, 6, 7, 8, 12], 14],
    out: [6, 8],
  },
  {
    in: [[2, 6, 8, 10], 20],
    out: null,
  },
  {
    in: [[2, 6, 8, 10], 40],
    out: null,
  },
  {
    in: [[6, 10, 10, 10, 31, 35, 37, 55, 70, 73], 80],
    out: [10, 70],
  },
];

const results = examples.map(({ in: input, out: expected }) => {
  const observed = twoSum(...input);
  expected;
});
