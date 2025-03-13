// Two sum Problme
let nums = [2, 7, 11, 15];
let target = 9;
let result = [];

for (let x = 0; x < nums.length; x++) {
  for (let y = x + 1; y < nums.length; y++) {
    if (nums[x] + nums[y] == target) {
      result.push(x);
      result.push(y);
      break;
    }
  }
}

console.log(result);
