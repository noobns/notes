/*Write a program in C to display the pattern like right angle triangle with a number.

								1
								12
								123
								1234
*/

function pattern (rows) {
	for (var i = 0; i <= rows; i++) {
		for (var j = 0; j <= i; j++) {
			console.log(j);
		}
	}
}

pattern(4);
