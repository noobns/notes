//If a number is plaindrome print factorial of each digit

function digit_pallindrome (num) {
	var reverse   = 0;
	var original  = num;
	while(num >  0){
		var remainder = num%10;
		reverse       = (reverse * 10) + remainder;	
		num           = Math.floor(num/10);

		var f   = 1;

		for (var i = 1; i <= remainder; i++) {
			f=f*i;
		}
		console.log("factorial of digit ", remainder," is", f);
	}	

	if(original === reverse) {
		console.log("The num", original, "is a pallindrome");
	}
	else
		console.log("Number is not a pallindrome");

}

digit_pallindrome (2442);
