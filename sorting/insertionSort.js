const insertionSort = (arr) => {
  const sorted = [...arr];
  // if (sorted.length < 2) return sorted;
  for (let i = 1; i < sorted.length; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (sorted[i] < sorted[j]) {
        const [removed] = sorted.splice(i, 1);
        sorted.splice(j, 0, removed);
      }
    }
  }
  return sorted;
}


const generateRandomValues = (length, max) => new Array(length)
  .fill(null).map(() => Math.floor(Math.random() * max));

const case1 = [3, 5, 8, 7, 2];
console.log({case1, sorted: insertionSort(case1)});
const case2 = generateRandomValues(6, 20);
console.log({case2, sorted: insertionSort(case2)})
const case3 = generateRandomValues(6, 20);
console.log({case3, sorted: insertionSort(case3)})