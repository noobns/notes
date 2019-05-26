//Write a program in C to display n terms of natural number and their sum.

function natural (n) {
	var sum = 0;
	for(var i = 1; i <= n; i++) {
		sum = sum + i;
	}
	console.log(sum);
}

natural(89);

