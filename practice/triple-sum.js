//Write a C program to compute the sum of the two given integer values. If the two values are the same, then return triple their sum.
/*eslint no-console : off*/

function triple_sum(a,b){
	var sum;
	sum = a + b;

	if(a===b){
		sum = (sum)*3;
		console.log(sum);
		return sum;
	}
	else{
		console.log(sum);
		return sum;
	}

}

triple_sum(5,5);
