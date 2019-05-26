//Write a C program to find the sum of first 10 natural numbers.

function sum () {
	var sum = 0;
	for(var i=1; i<=10; i++) {
		sum = sum + i;
	}
	console.log(sum);
}

sum();
