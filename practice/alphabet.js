function alphabet (input) {
	if(input >= 'a' && input <='z' || input >='A' && input <='Z'){
		console.log('the input is alphabet');
		return;
	}
	console.log("input is", (typeof(input)));
}

alphabet('a');
