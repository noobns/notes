
function middle_even (arr) {
	if (arr.length % 2 == 0){
		var right  = (arr.length)/2;
		var left = (right-1);
		console.log (arr[left],arr[right]);
		return;
	}

	else
		console.log ("odd array kahe de rahe ho");
}

module.exports = middle_even;
