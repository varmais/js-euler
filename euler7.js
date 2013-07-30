function isPrimeNumber(n) {
	if (n < 2) return false;

	var sqrt = parseInt(Math.sqrt(n));

	for (var i = 2; i <= sqrt; i++) {
		if(n%i == 0){
			return false;
		}
	}
	return true;
}

var index = 0;
var num = 2;
var prime = 0;

while (index !== 10001) {
	if(isPrimeNumber(num)) {
		index++;
		prime = num;
	}
	num++;
}

console.log(prime);