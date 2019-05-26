//Write a C program to check if a given non-negative given number is a multiple of 3 or 7, but not both.

function multiple (a){
	if(a % 3 === 0 && a % 7 === 0 ){
		console.log("I am multiple of both");
	}
	else if(a % 3 === 0 || a % 7 === 0){
		console.log("I am multiple of either a or b");
	}
	else
		console.log("bye bye");

}

multiple("i");
