function Main(input) {
	const result = input.split("\n");



	console.log(result);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));