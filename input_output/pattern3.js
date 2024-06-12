let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let name = lines[0];
console.log(`${name}`);
