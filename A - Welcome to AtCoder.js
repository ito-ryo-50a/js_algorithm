// https://atcoder.jp/contests/practice/tasks/practice_1

// リファクタリングしたコード
function Main(input) {
  const lines = input.split("\n");
  const a = Number(lines[0]);
  const [b, c] = lines[1].split(" ").map(Number);
  const s = lines[2];
  console.log(`${a + b + c} ${s}`);
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

//　ACしたコード
function Main(input) {
  const lines = input.split("\n");
  const a = parseInt(lines[0], 10);
  const [b, c] = lines[1].split(" ").map(Number);
  const s = lines[2];
  console.log(`${a + b + c} ${s}`);
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));