//WAP to get the electricity bill based on the no of units consumed. if the units consumed are less than 50 bill is rs.100, if b/w 50-100 bill is 5/unit, more than 100 bill is 10/unit.
/*eslint no-console : off*/
function bill (units){
	var _bill;
	if (units < 0) {
		console.log('you are stupid');
	}
	else if (units <= 50) {
		console.log ('your bill is Rs.100 ');
	}
	else if (units <= 100) {
		_bill = 5 * units;
		console.log ('your bill is : ', _bill);
	}
	else if (units > 100){
		_bill = 10 * units;
		console.log ('your bill is :', _bill);
	}

	console.log ("I ma done");
}

bill(-10);
