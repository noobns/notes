/*find greatest number of three*/
/*eslint no-console : off*/

/*function greatest(a, b, c) {
	if(a > b && a > c) {
		console.log("I am the greatest", a);
		return;
	}	
	else if(b > a && b > c) {
		console.log("No, bitch I am your daddy", b);
		return;
	}
	else{
		console.log("UFF!!!!! imature people get a life.", c);
		return;
	}

}

greatest(15, 24, 78);
*/

function greater (a, b ,c) {
	let max = a > b ? (a > c ? a : c) : (b > c ? b : c);
	console.log(max);
}

greater (12, 45, 8);
