/* sum of two numbers
 * if numbers same then tripple the sum
 */


function sum(A, B){
	var sum = A + B;
	if (A === B){
		sum = sum * 3;
	}
	console.log(sum);
}

sum(3,2);
