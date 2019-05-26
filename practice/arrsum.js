//Write a C program to compute the sum of the elements of an given  array of integers.

function sum (arr) { 
	var sum = 0;
	for (i = 0; i < arr.length; i++ ) {
		console.log ('Elemetn at index', i, 'is', arr[i]);
		sum = sum + arr[i];
	}
	console.log(sum, "I am the sum");
	return;
}


sum ([1,2,3]);
