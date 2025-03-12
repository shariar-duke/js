// char count problem
let str = "hello everyone";
let obj = {};

function charCount(str) {
  for (let x of str) {
    if (x !== " ") {
      if (!obj.hasOwnProperty(x)) {
        obj[x] = 1;
      } else {
        obj[x] = obj[x] + 1;
      }
    }
  }

  return obj;
}

console.log(charCount(str));
