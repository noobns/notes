// Find all the prime numbers from 1-100

function prime (num) {
	var count = 0;

	for(var i = 1; i <= num; i++) {
		count = 0;
		for(var j = 1; j <= i; j++){
			if(i % j === 0) {
				count++;
			}	
		}
		if (count === 2 )
			console.log (i, "is prime");
	}
}

prime(100);
