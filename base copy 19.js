// 

// リファクタリングしたコード


//　ACしたコード
function Main(input) {
  const lines = input.split("\n");
  console.log(`${lines}`);
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));