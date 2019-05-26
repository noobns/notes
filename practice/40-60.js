//Write a C program to check whether two given integers are in the range 40..50 inclusive, or they are both in the range 50..60 inclusive.
/* eslint no-console: off */


function between (x,y){
	if(x >= 40 && x <= 60 || y >=40 && y <=60){
		console.log("I am in between");
		return;
	}
	else{
		console.log("Are bhaiya hum vahi hai tum jo dale ho", x , y);
		return;
	}
}

between(40,70);
