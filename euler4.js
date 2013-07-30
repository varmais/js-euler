var max = 999;
var min = 100;
var num = 0;
var highest = 0;

String.prototype.reverse = function() {
	return this.split('').reverse().join('');
}

function isPalindrome(str) {
	if(str == str.reverse()) {
		return true;
	}
	return false;
}

function isHighest(num) {
	if(num > highest && isPalindrome(num+"")) {
		highest = num;
	}
}

for(var i = max; i>min; i--) {
	for (var j = max; j>min; j--) {
		num = i * j;
		isHighest(num);
	}
}

console.log(highest);