/* Count Number of Digits in an Integer */
/* find the sum of the Digits */
/* find number of odd and even digits in the Interger */

function count_int (integer) {
	var num          = integer;
	var total_digits = 0;
	var sum          = 0;

	var even_checking_count = 0;
	var odd_checking_count  = 0;

	var last_digit   = num % 10;

	while(num > 0) {
		var checking = num % 10;
		num          = Math.floor(num / 10);
		total_digits++;
		sum          = sum + Math.floor(num%10);
		if(checking % 2 === 0){
			even_checking_count++;
		}
		else 
			odd_checking_count++;
	}
	console.log(checking, "outside the program");


	console.log("the number of even digits is", even_checking_count);
	console.log("the number of odd digits is", odd_checking_count);
	console.log("The total digits for number", integer, "is", total_digits);
	console.log("The total sum of the digits is", sum + last_digit);
}

/*
function count_int_improved (integer) {
	var num          = integer;
	var total_digits = 0;
	var sum          = 0;

	while(num > 0) {
		sum = sum + (num % 10);
		num = Math.floor(num / 10);
		total_digits++;
	}

	console.log("The total digits for number", integer, "is", total_digits);
	console.log("The total sum of the digits is", sum);
}
count_int_improved (123456);
*/
count_int (123456) ;
