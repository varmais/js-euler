function isDivisible(number) {

	var boolean = true;
	for (var i=20; i>0; i--) {
		if(number%i !== 0) {
			boolean = false;
			break;
		}
	}
	return boolean;
}
	
function euler() {

	var res = 1;

	while(isDivisible(res) == false) {
		res++;
	}

	console.log(res);
}

euler();