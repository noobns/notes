//Write a program in C to display the n terms of odd natural number and their sum.

function odd (n) {
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum = sum + i;
	}
	console.log(sum);
}

odd (10);
