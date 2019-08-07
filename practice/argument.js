/*Write a function that takes an argument. If the argument Is a number print suitable message. If argument is anything other then a number then print "Argument not a number*/
/* eslint no-console : off */


function argument(arg){
	if(typeof arg === "number"){
		console.log("I am a number");
	}
	else{
		console.log("I am not a number instead. I am a :");
		console.log(typeof arg);
	}
}

argument([1,2,3]);
