let arr = [4, 12, 5, -1, 6, 45, 2, 6, 8];

for (let x = 0; x < arr.length - 1; x++) {
  // Outer loop
  for (let y = 0; y < arr.length - 1 - x; y++) {
    // Inner loop optimized
    if (arr[y] > arr[y + 1]) {
      [arr[y], arr[y + 1]] = [arr[y + 1], arr[y]];
    }
  }
}

console.log(arr);
