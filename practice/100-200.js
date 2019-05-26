// Write a C program to check two given integers whether either of them is in the range 100..200 inclusive
/* eslint no-console : off */

function between (x, y){
	if(x >= 100 && x <= 200 || y >= 100 && y <= 200){
		console.log("I am not what you needed");
		return;
	}
	else{
		console.log("Hi there!!!");
		return;
	}
}

between (180,150);
