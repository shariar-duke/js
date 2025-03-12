let arr = [3, 5, 6, 9, 44, 56, 99, 102, 150, 170];

function binarySearch(arr, num) {
  if (arr.length < 1) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (num > mid) {
      start = mid + 1;
    } else if (num < mid) {
      end = mid - 1;
    }
  }

  return -1; // jode number khuje na pay then eta
}

console.log(binarySearch(arr, 170)); // Output: 9
