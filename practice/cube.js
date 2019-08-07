//Write a program in C to display the cube of the number upto given an integer

function cube (n) {
	var cube;
	for (i = 0; i <= n ; i++){
		cube = Math.pow(n,3);
	}
	console.log(cube);
}

cube(9);
