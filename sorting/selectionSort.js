const selectionSort = (arr) => {
  const unsorted = [...arr];
  const sorted = [];
  while (unsorted.length) {
    let minIndex = 0;
    for (let i = 1; i < unsorted.length; i += 1) {
      if (unsorted[i] < unsorted[minIndex]) minIndex = i;
    }
    sorted.push(...unsorted.splice(minIndex, 1));
  }

  return sorted;
}

const generateRandomValues = (length, max) => new Array(length)
  .fill(null).map(() => Math.floor(Math.random() * max));

const case1 = [3, 5, 8, 7, 2];
console.log({case1, sorted: selectionSort(case1)});
const case2 = generateRandomValues(6, 20);
console.log({case2, sorted: selectionSort(case2)})
const case3 = generateRandomValues(6, 20);
console.log({case3, sorted: selectionSort(case3)})