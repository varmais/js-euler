var sum = 1000;
for(var a = 1; a <= sum/3; a++) {
	for (var b = a+1; b <= sum/2; b++) {
		var c = sum-a-b;
		if(c*c == a*a + b*b) {
			//console.log(a +" " + b + " " + c);
			console.log(a*b*c);
		}
	}
}