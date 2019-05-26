//Write a C program to compute the sum of the two given integers. If one of the given integer value is in the range 10..20 inclusive return 18.

function inclusive(a, b){
	var sum = a + b;
	if(sum >= 10 && sum <= 20){
		console.log("18");
		return;
	}
	else
		console.log(sum);

}

inclusive(1,27);
