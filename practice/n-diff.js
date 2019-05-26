// Write a C program to get the absolute difference between n and 51. If n is greater than 51 return triple the absolute difference.
/* eslint no-console : off */

function difference (m,n){
	var diff = m - n;
	if(m < n){
		diff = (diff)*3;
		console.log(diff, "I am the triple of the diff");
		return  diff;
	}
	else{
		console.log(diff);
		return diff;
	}
}

difference(12,15);
