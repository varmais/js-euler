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

var sum = 0;

for(var i = 0; i<2000000; i++) {
	if(isPrimeNumber(i)) {
		sum += i;
	}
}

console.log(sum);