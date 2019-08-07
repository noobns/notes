/*input a number and find if it's even or odd*/
/*eslint no-console : off*/

function even_odd(number){
	if (number < 0){
		console.log("bhaiaaaaa chote ho aap abhi");
		return;
	}
	if (number){ 
		console.log(typeof number);
		return;
	}
	else {
		let type = (number % 2 === 0 ? 'even':'odd');
		console.log(type);
	}
}

even_odd(0);
