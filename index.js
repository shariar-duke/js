function twoSum(nums, target) {
  let map = {}; // Stores numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i]; // Found the pair
    }

    map[nums[i]] = i; // Store index of current number
  }

  return []; // No solution found
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
