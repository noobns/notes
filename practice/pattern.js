/*Write a program in C to display the pattern like right angle triangle using an asterisk
 
                *
                **
                ***
                ****
*/

function pattern (rows) {
	for (var i = 1; i <= rows; i++){
		for (j = 1; j <= i; j++){
			console.log('*');
		}
	}
}

pattern(6);
