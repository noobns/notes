//print the array middle element.

/*
function middle (arr) {
 
	if (arr.length % 2 !== 0){
		var middle = (arr.length-1)/2;
		console.log (arr[middle]);
	}

	else
		console.log ("I am even in length");
}

middle ([1,2,3,5,6,7]);
*/
var middle_even = require ('./even_arr');
var middle_odd  = require ('./odd_arr');

function middle (arr) {
	if (arr.length % 2 == 0){
		middle_even (arr);
	}

	else {
		middle_odd (arr);
	}
}


module.exports = middle;
