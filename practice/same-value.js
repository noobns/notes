// Write a C program to compute the sum of three given integers. If the two values are same return the third value. 

function sum (a,b,c) {
	var sum; 
		
	if(a === b){
		console.log(c, "OHHHH nooooooo a and b are same");
		return c;
	}

	sum	= a + b + c;
	console.log(sum, "I am the sum");
	return sum;

}

sum (4,4,6);
