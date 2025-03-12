function linearSearch(arr, value) {
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === value) {
      return x;
    }
  }

  return -1;
}

console.log(linearSearch([2, 3, 5, 6, 9], 9));
