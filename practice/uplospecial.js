function check (input) {

	var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

	if(regex.test(input)){
		console.log("It is a special character");
	}

	else if(input == input.toLowerCase()) {
		console.log("The input is Lower case");
	}

	else if(input == input.toUpperCase()) {
		console.log("The input is Upper Case");
	}


	else
		console.log('input is:', input);
}

check('Ab');
