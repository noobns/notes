//Write a C program to check if y is greater than x, and z is greater than y from three given integers x,y,z.

function greater(x, y, z){
	if(x > (y && z)){
		console.log("I am greater than y and z");
		return;
	}
	else if(y > (x && z)){
		console.log("I am greater than x and z");
		return;
	}
	else if(z > x && y){
		console.log("I am the greatest");
		return;
	}
	else 
		console.log("I am a alien");
}

greater([12],'i',[78]);

