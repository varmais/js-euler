var num = 600851475143;
var max = Math.round(Math.sqrt(num));

function highestFactor(n) {
	max = Math.round(Math.sqrt(n));

	for(var i = max; i>1; i--) {
		if(n%i == 0 && highestFactor(i) == 1) {
			return i;
		}
	}
	return 1;
}

console.log(highestFactor(num));