/* diffrence between a and 51 
 * if a is greater than 51 then tripple the diff
 */
function diff(a,b){
	var diff = a - b;
		if(a > b){
			diff = diff * 3;
		}
	console.log( diff );
}

diff(61,51);
