//Write a C program that accept two integers and return true if either one is 5 or their sum or difference is 5

function integers(a,b){
	var sum  = a + b;
	var diff = a - b;

	if(sum === 5 || diff === 5){
		console.log("I am sum or diff");
		return;
	}
	else if(a === 5 || b === 5){
		console.log("I am a/b = 5");
		return;
	}
	else
		console.log("I am out of league");

}

integers([7],"i");
