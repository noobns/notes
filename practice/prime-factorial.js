// Find number is prime or not. If prime, find factorial of all the digits.

var factorial = require('./factorial');

function prime_factorial (num) {
	var count = 0;

	for(var i = 1; i <= num; i++) {
		if(num % i === 0) {
			count++;
		}	
	}

	if(count === 2){
		console.log("number is prime");
		while (num > 0) {
			var seperated = num % 10;
			num  = Math.floor(num/10);

			var facto = factorial(seperated);
			console.log ({factorial : facto, number : seperated}, 'factorial find ok');
		}

	}
	else
		console.log("number is not prime");
}

prime_factorial (21);
