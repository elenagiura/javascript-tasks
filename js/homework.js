/* TASK 1: 
Peter has 3500$, and Jim has 5000$, print if Peter has more money than Jim (console log result, true of false)
*/

var Peter = 3500;
var Jim = 5000;

console.log("If Peter has more money than Jim?");
console.log(Peter > Jim ? "Peter has more money" : "Peter has less money");

/* TASK 2: 
John is 38 years old. In 8 years John will be two times older than Mike. How old is Mike now (console log result)
*/

var John = 38;
var Mike = (John + 8)/2 - 8;

console.log ("Mike is "+ Mike +" years old")

/* TASK 3: 
There are 78 birds in a first flock, and 57 birds in a second flock. 
12 birds decided to move from the first flock to the second flock, and then 4 birds left second flock. 
Is the first flock larger or equal to the second one ? (console log result, true or false)
*/

var firstFlock = 78;
var secondFlock = 57;

firstFlock= firstFlock-12;
secondFlock= secondFlock+12-4;

console.log("Is the first flock larger or equal to the second one ?")
console.log(firstFlock >= secondFlock ? "First flock is larger" : "Second flock is larger")