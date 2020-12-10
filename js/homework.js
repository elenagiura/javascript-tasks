/* TASK 1: 
Write a JavaScript conditional statement to find the largest of five numbers.
Console log the result in the string format (sentence + number variable).
Numbers : 15, -2, 22, 0, 13 
*/

var a = 15;
var b = -2;
var c = 22;
var d = 0;
var e = 13;

if (a>b && a>c && a>d && a>e) {
	console.log ("Largest number is: "+ a);
} else if (b>a && b>c && b>d && b>e) {
	console.log ("Largest number is: "+ b);
} else if (c>a && c>b && c>d && c>e) {
	console.log ("Largest number is: "+ c);
} else if (d>a && d>c && d>b && d>e) {
	console.log ("Largest number is: "+ d);
} else {
	console.log ("Largest number is: "+ e);
} 

/* TASK 2: 
Write a JavaScript conditional statement to find the sign (+ or -) of product of three numbers. Console log the result.
Numbers : 3, -7, 2 
*/

a = 3;
b = -7;
c = 2;

if (a*b*c>=0) {
	console.log("Sign is +");
} else {
	console.log("Sign is -");
}


/* TASK 3: 
Write a switch statement to console log "Hello world" in 5 different languages
*/
a = "Russian";

switch (a) {
	case "English":
		console.log("Hello World");
	break;
	case "Serbian":
		console.log("Zdravo svete");
	break;
	case "Romanian":
		console.log("Salut Lume");
	break;
	case "French":
		console.log("Bonjour le monde");
	break;
	case "Slovak":
		console.log("Ahoj svet");
	break;
	default:
		console.log("nothing");
}




/* TASK 4: 
Create userAge variable, and give it some value.
Write a ternary operator that checks if a user is 28 or older. Store result in a variable.
Then write an if/else statement using result from variable. 
If it's false (first check this), console log:
"User is less than 28 years old"
If it's true, create new if/else statement that check if user is older than 28.
If it's true, console log:
"User is older than 28"
If not, console log:
"User is 28"
*/

var userAge = 26;
var result;

(userAge>=28 ? result=true : result=false)

if(result===false) {
	console.log("User is less than 28 years old");
} else {
	if(userAge>28) {
		console.log("User is older than 28");
	} else {
		console.log("User is 28");
	}
}