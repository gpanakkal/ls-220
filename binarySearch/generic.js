// Generic binary search. Takes callbacks that determine search pattern and how 
// to update in the event the search end condition is met.
const binarySearch = (arr, target, testCb, modifierCb) => {
  let vals = {
    returnIndex: -1,
    left: 0,
    right: arr.length - 1,
    mid: null,
  }
  while (vals.left <= vals.right) {
    vals.mid = Math.floor((vals.left + vals.right) / 2);
    if (testCb(arr, vals) === 0) {
      vals = { ...vals, ...modifierCb(vals) };
    } else if (testCb({ arr, target, ...vals }) > 0) vals.left = vals.mid + 1;
    else vals.right = vals.mid - 1;
  }

  return vals.returnIndex;
}

// Example usage
const findFurthestLeft = (nums, target) => {
  const modifierCb = ({returnIndex, left, mid, right}) => ({ returnIndex: mid, right: mid - 1 });
  
  const comparatorCb = (arr, { left, mid, right }) => {
    if (arr[mid] === target) return 0;
    else if (arr[mid] < target) return 1;
    else return -1;
  };
  return binarySearch(nums, target, comparatorCb, modifierCb);
}