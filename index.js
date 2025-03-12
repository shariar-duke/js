const mixedArray = [12, -7, 45, "hello", -23, 89, "world", -3];

let max = -Infinity;
let secondmax = -Infinity;
let min = Infinity;

for (let x of mixedArray) {
  if (typeof x === "number") {
    if (x > max) {
      secondmax = max;
      max = x;
    }
  }
}
console.log("Max value is", max);
console.log("Second Max is", secondmax);
