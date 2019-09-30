//Write a program to calculate the factorial of a given number.
//Write a program to calculate the factorial of every digit of a given number.

function factorial (n) {
	var f   = 1;

	for (var i = 1; i <= n; i++) {
		f=f*i;
	}
	return f;
}

function digit_factorial (num){
	while (num > 0) {
		var	seperated = num % 10;
		num  = Math.floor(num/10);

		var facto = factorial(seperated);
		console.log ({factorial : facto, number : seperated}, 'factorial find ok');
	}
}
module.exports = factorial;
