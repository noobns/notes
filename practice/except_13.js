//Write a C program to compute the sum of the three given integers. However, if any of the values is in the range 10..20 inclusive then that value counts as 0, except 13 and 17.

function except (a,b,c) { 
	var sum;
	if (a === 13 || a === 17 || b === 13 || b === 17 || c === 13 || c === 17) {
		console.log(sum, "I include 13 or 17");
		return;
	}
	else if (a >= 10 && a <= 20) {
		a = 0;
		sum = a + b + c;
		console.log(sum,"UFFFF ye A ke nakhre tmhre");
		return;
	}
	else if (b >= 10 && b <= 20) {
		b = 0;
		sum = a + b + c; 
		console.log(sum,"UFFFF ye B nakhre tmhre");
		return;
	} 
	else if (c >=10 && c <= 20) {
		c = 0;
		sum = a + b + c; 
		console.log(sum,"UFFFF ye C nakhre tmhre");
		return;
	}
	else 
		console.log("bye bye");
}

except(10, 1, 1);
