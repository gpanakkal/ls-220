const insertionSort = (arr) => {
  const sorted = [...arr];
  for (let forward = 1; forward < arr.length; forward += 1) {
    const currentValue = sorted[forward];
    for (let backward = forward - 1; backward >= -1; backward -= 1) {
      const previousValue = sorted[backward];
      if (previousValue > currentValue) sorted[backward + 1] = previousValue;
      else if (previousValue <= currentValue || backward === -1) {
        sorted[backward + 1] = currentValue;
        break;
      }
    }
  }
  return sorted;
}

const reverseInsert = (previous, value) => {
  for (let i = previous.length - 1; i >= 0; i -= 1) {
    if (value <= previous[i]) continue;
    return [...previous.slice(0, i + 1), value, ...previous.slice(i + 1)];
  }
  return [value, ...previous];
}

const insertionSortReduce = (arr) => arr.reduce((sorted, currentValue, i) => {
  const sortedPrevious = reverseInsert(sorted.slice(0, i), currentValue);
  return sortedPrevious.concat(sorted.slice(i + 1));
}, [...arr]);

const randomIntegers = (count, max) => new Array(count)
  .fill(null).map(() => Math.floor(Math.random() * max));

const cases = new Array(10).fill(null).map(() => randomIntegers(7, 100));
const compareArrays = (arr1, arr2) => arr1.every((el, i) => el === arr2[i]);

cases.forEach((el) => {
  const correctSort = el.toSorted(((a, b) => a - b));
  const result = insertionSortReduce(el);
  const results = {
    in: el,
    out: result,
    expected: correctSort,
    correct: compareArrays(result, correctSort),
  }
  // if (results.correct === false) 
    console.log(results);
});

