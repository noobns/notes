//find if a given number is prime or not.

function prime (num){
	var count = 0;

	for(var i = 1; i <= num; i++) {
		if(num % i === 0) {
			count++;
		}	
	}

	if(count === 2){
		console.log("number is prime");
	}
	else
		console.log("number is not prime");
}

prime(8);
