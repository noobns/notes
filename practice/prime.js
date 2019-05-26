//find if a given number is prime or not.

function prime (num){
	if (num%num === 0 || num%1 === 0 ){
		console.log("I am prime");
	}
	else ("I am not prime");


}

module.exports = prime;
