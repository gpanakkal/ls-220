// Given a list of integers nums and a target integer,
// find two numbers in the list that add up to the target
// and return their indices.

// It is guaranteed that there is exactly one pair of numbers
// that satisfies the condition, and each number can only be
// used once in the pair.

// The order of the output array matters, and the index of the
// number that appears first should be the first one in the output array.

// Input: nums = [4, 2, 3, 9, 15, 5], target = 11
// Output: [1, 3]
// Explanation: Because nums[1] + nums[3] == 11, we return [1, 3].

const sumTwoSum = (nums, [i, j]) => nums[i] + nums[j];

const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i += 1) {
    const rem = target - nums[i];
    if (rem in hash) {
      return [hash[rem], i];
    }
    hash[nums[i]] = i;
  }
};

console.log(twoSum([4, 2, 3, 9, 15, 5], 11));