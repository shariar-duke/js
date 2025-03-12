const mixedArray = [12, -7, 45, "hello", -23, 89, "world", -3];

let max = -Infinity;
let min = Infinity;

for (let x of mixedArray) {
  if (typeof x === "number") {
    if (x > max) {
      max = x;
    }
  }
}
console.log("Max value is", Infinity);
