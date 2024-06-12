// 
function Main(input) {
	const lines = input.split("\n");
	console.log(lines);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));


// 
const main = (input) => {
  console.log(input)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))


// 
let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let name = lines[0];
console.log(`${name}`);


// 
console.log(`a: ${a}`);

// 
console.log(`a: ${a}, b: ${b}`);

// 
console.log(`a: ${a}, b: ${b}, c: ${c}`);