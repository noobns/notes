//Write a C program to calculate the factorial of a given number.

function factorial (n) {
	var f=1;
	for (var i = 1; i <= n; i++) {
		f=f*i;
		console.log(f);
	}
}

factorial (4);
