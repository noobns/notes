//Write a C program to check two given integers, and return true if one of them is 30 or if their sum is 30
/*eslint no-console : off */

function integer (a,b){
	var sum = a + b;

	if(a || b === 30){
		console.log("I am equal to 30,");
		return;
	}
	else if(sum === 30){
		console.log("sum is 30");
		return;
	}
	else {
		console.log("I am not equal to 30", sum);
		return sum;
	}
}

integer(20,17);
