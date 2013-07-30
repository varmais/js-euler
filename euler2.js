function fibo(n) {
	if(n < 2) {
		return 1;
	} else {
		return fibo(n-1) + fibo(n-2);
	}
}

var sum = 0;
var n = 1;
var max = 4000000;

while(fibo(n) < max) {
	var res = fibo(n);
	if(res%2 == 0) {
		sum += res;
	}
	n++;
}

console.log(sum);