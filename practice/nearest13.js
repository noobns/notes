//Write a C program to check two given integers and return the value whichever value is nearest to 13 without going over. Return 0 if both numbers go over.

function check (a,b,c) {
	if((a-b) === (b-c)){
		console.log("true");
		return;
	}

	else
		console.log("Leave me alone");
}

check(1,5,5);
