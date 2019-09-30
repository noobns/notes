//Print all the pallindrome number from 1 to n

function pallindrome (num) {
	var original = num;
	var reverse = 0;

	while(num > 0){
		var remainder = num%10;
		reverse       = reverse * 10 + remainder;
		num           = Math.floor(num/10);
	}

	if(original === reverse){
		console.log("The number ",original, " is a pallindrome");
	}
}

function n_number (num) {
	for(var i = 1; i <= num; i++) {
		pallindrome(i);
	}

}

n_number (100);
