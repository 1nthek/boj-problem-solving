const solution = (n) => {
  let cache = new Array(n + 1).fill(0);
  cache[1] = 0;
  for (let i = 2; i <= n; ++i) {
    cache[i] = cache[i - 1] + 1;
    if (i % 3 === 0) {
      cache[i] = Math.min(cache[i / 3] + 1, cache[i]);
    }
    if (i % 2 === 0) {
      cache[i] = Math.min(cache[i / 2] + 1, cache[i]);
    }
  }
  return cache[n];
};

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let n = parseInt(input[0]);
console.log(solution(n));
