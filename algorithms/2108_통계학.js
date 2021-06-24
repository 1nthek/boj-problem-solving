const solution = (n, arr) => {
  arr.sort((a, b) => a - b);
  const p1 = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / n);
  const p2 = arr[parseInt(n / 2)];
  let obj = {};
  arr.forEach((e) => {
    if (obj[e] === undefined) {
      obj[e] = 0;
    }
    ++obj[e];
  });
  let newArr = [];
  for (let key in obj) {
    newArr.push([key, obj[key]]);
  }
  newArr.sort((a, b) => {
    return a[1] === b[1] ? b[0] - a[0] : a[1] - b[1];
  });
  let p3 = newArr[newArr.length - 1][0];
  if (
    newArr.length > 1 &&
    newArr[newArr.length - 1][1] === newArr[newArr.length - 2][1]
  ) {
    p3 = newArr[newArr.length - 2][0];
  }
  const p4 = arr[n - 1] - arr[0];

  return [p1, p2, p3, p4];
};

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let n = parseInt(input.shift());
solution(
  n,
  input.map((e) => parseInt(e))
).forEach((e) => console.log(e));
