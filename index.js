function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Assume the first element is the smallest

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Update minIndex if a smaller element is found
      }
    }

    // Swap only once per pass (if minIndex changed)
    if (minIndex != i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([23, 12, 6, -5, 98]));
