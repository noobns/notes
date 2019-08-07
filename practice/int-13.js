//Write a C program to compute the sum of the three integers. If one of the values is 13 then do not count it and its right towards the sum.

function int_13 (a,b,c) {
	var sum;
	sum = a + b + c;

	if(a == 13 || b == 13 || c == 13){
		sum = sum - 13;
		console.log(sum,"I am not including 13");
		return;
	}

	else {
		console.log(sum,"I am the sum");
		return sum;
	}

}

int_13 (1,13,4);
