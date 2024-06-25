const insertionSort2 = (arr) => {
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


const insertionSort3 = (inputArray) => {
  return inputArray.reduce((sorted, el, i, arr) => {
    let result = sorted;
    for (let j = i; j >= 0; j--) {
      if (arr[j] > el) {
        result = sorted.slice(0, i - 1).concat([el], sorted.slice(i));
        break; 
      }
    }
    return result;
  }, inputArray);
}

/*
Comparison:
If currentValue is greater than or equal to lower, insert current into the previous slot (`previous + 1`) and break
If current is smaller than lower and `previous > 0`, continue
If `previous` is 0 and `currentValue` is smaller than `previousValue`, assign it to 0 and break
If 

*/

const insertionSort = (arr) => {
  let sorted = [...arr];
  for (let current = 1; current < arr.length; current += 1) {
    const currentValue = sorted.splice(current, 1)[0];
    for (let previous = current - 1; previous >= -1; previous -= 1) {
      const previousValue = sorted[previous];
      if (currentValue >= previousValue || previous === -1) {
        sorted.splice(previous + 1, 0, currentValue);
        break;
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