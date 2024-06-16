const bubbleSort = (arr) => {
  if (arr.length === 1) return arr;
  for (let i = 0; i < arr.length - 1; i += 1) {
    [arr[i], arr[i + 1]] = [arr[i], arr[i + 1]].sort(((a, b) => a - b));
  }
  return bubbleSort(arr.slice(0, arr.length - 1)).concat(arr[arr.length - 1]);
}

const generateRandomValues = (length, max) => new Array(length)
  .fill(null).map(() => Math.floor(Math.random() * max));

console.log(bubbleSort([3, 5, 8, 7, 2]));
const case2 = generateRandomValues(6, 20);
console.log({case2, sorted: bubbleSort(case2)})
const case3 = generateRandomValues(6, 20);
console.log({case3, sorted: bubbleSort(case3)})