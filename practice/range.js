/*two given integer values are in the range 20..50 .
 * Return true if 1 or more of them are in the said range otherwise return false. 
 */

function range(a,b){
	if(a > 20 && a < 50 || b > 20 && b < 50){
		console.log("yes the numbers lie in range");
	}
	console.log(a,b);
}

range(2,8);
