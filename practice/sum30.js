/*if one variable is 30 then print true
 * or if their sum is 30 then print true
 */

function sum(a,b){
	var sum = a + b;
	console.log(sum);
	if (a === 30 || b === 30){
		console.log("true number is 30");
	}
	if(sum === 30){
		console.log("sum is 30");
	}

}
sum(20,10);
