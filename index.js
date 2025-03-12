function findOddNumbers(arr, index = 0, result = []) {
  // Base case: If the index is out of bounds of the array, return the result array
  if (index === arr.length) {
    return result;
  }

  // Recursive case: Check if the current number is odd
  if (arr[index] % 2 !== 0) {
    result.push(arr[index]); // Add the odd number to the result array
  }

  // Recursively call the function with the next index
  return findOddNumbers(arr, index + 1, result);
}

// Test the function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = findOddNumbers(numbers);
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]
