//Check if a number is palindrome. 

function pallindrome (num) {
	var reverse  = 0;
	var original = num;
	while(num >  0){
		var remainder = num%10;
		reverse       = (reverse * 10) + remainder;	
		num           = Math.floor(num/10);
	}	

	if(original === reverse) {
		console.log("The num", original, "is a pallindrome");
	}
	else
		console.log("Number is not a pallindrome");
}

pallindrome (212322);
