const solution = (n, arr) => {
  let ans = [];
  arr.forEach((e) => {
    parseInt(e) === 0 ? ans.pop() : ans.push(parseInt(e));
  });
  return ans.reduce((acc, cur) => acc + cur, 0);
};

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let n = parseInt(input.shift());
console.log(solution(n, input));
