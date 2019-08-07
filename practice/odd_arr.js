function middle_odd (arr) {
	if (arr.length % 2 !== 0){
		var middle = (arr.length-1)/2;
		console.log (arr[middle]);
		return;
	}

	else 
		console.log("Are budbaak even die ho");
}

module.exports = middle_odd;
