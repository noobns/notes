//Write a C program to check a given array of integers of length 1 or more and return true if the first element and the last element are equal in the given array.

function array (arr) {
	var arrlength = arr.length;
	console.log(arrlength);

	var	first  = arr[0];
	var last = arr[array-1];

	if (first === last) {
		console.log ("yes we are equal");
	}

	else 
		console.log ("Why we are not same");
}

array ([14,35,14,24,79]);
