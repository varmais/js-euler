var sumOfSquares = 0;
var squareOfSums = 0;

for(var i = 1; i <= 100; i++) {
	sumOfSquares += Math.pow(i, 2);
	squareOfSums += i;
}

squareOfSums = Math.pow(squareOfSums, 2);

console.log(squareOfSums - sumOfSquares);
