/* TASK 1: 
Peter has 3500$, and Jim has 5000$, print if Peter has more money than Jim (console log result, true of false)
*/

var Peter = 3500;
var Jim = 5000;

console.log('If Peter has more money than Jim?');
console.log(Peter > Jim ? 'Peter has more money' : 'Peter has less money');

/* TASK 2: 
John is 38 years old. In 8 years John will be two times older than Mike. How old is Mike now (console log result)
*/

var John = 38;
var Mike = (John + 8) / 2 - 8;

console.log('Mike is ' + Mike + ' years old');

/* TASK 3: 
There are 78 birds in a first flock, and 57 birds in a second flock. 
12 birds decided to move from the first flock to the second flock, and then 4 birds left second flock. 
Is the first flock larger or equal to the second one ? (console log result, true or false)
*/

var firstFlock = 78;
var secondFlock = 57;

firstFlock = firstFlock - 12;
secondFlock = secondFlock + 12 - 4;

console.log('Is the first flock larger or equal to the second one ?');
console.log(
  firstFlock >= secondFlock ? 'First flock is larger' : 'Second flock is larger'
);

/* TASK 4: 
Write a JavaScript conditional statement to find the largest of five numbers.
Console log the result in the string format (sentence + number variable).
Numbers : 15, -2, 22, 0, 13 
*/

var a = 15;
var b = -2;
var c = 22;
var d = 0;
var e = 13;

if (a > b && a > c && a > d && a > e) {
  console.log('Largest number is: ' + a);
} else if (b > a && b > c && b > d && b > e) {
  console.log('Largest number is: ' + b);
} else if (c > a && c > b && c > d && c > e) {
  console.log('Largest number is: ' + c);
} else if (d > a && d > c && d > b && d > e) {
  console.log('Largest number is: ' + d);
} else {
  console.log('Largest number is: ' + e);
}

/* TASk 5: 
Write a JavaScript conditional statement to find the sign (+ or -) of product of three numbers. Console log the result.
Numbers : 3, -7, 2 
*/

a = 3;
b = -7;
c = 2;

if (a * b * c >= 0) {
  console.log('Sign is +');
} else {
  console.log('Sign is -');
}

/* TASK 6: 
Write a switch statement to console log "Hello world" in 5 different languages
*/
a = 'Russian';

switch (a) {
  case 'English':
    console.log('Hello World');
    break;
  case 'Serbian':
    console.log('Zdravo svete');
    break;
  case 'Romanian':
    console.log('Salut Lume');
    break;
  case 'French':
    console.log('Bonjour le monde');
    break;
  case 'Slovak':
    console.log('Ahoj svet');
    break;
  default:
    console.log('nothing');
}

/* TASK 7: 
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

userAge >= 28 ? (result = true) : (result = false);

if (result === false) {
  console.log('User is less than 28 years old');
} else {
  if (userAge > 28) {
    console.log('User is older than 28');
  } else {
    console.log('User is 28');
  }
}
