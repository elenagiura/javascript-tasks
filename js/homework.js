/* TASK 1:

Create a constructor function for generating student objects. 
Each student object should have name, last name, age and average grade. */

console.log("TASK 1:");

function Student(firstName, lastName, age, averageGrade) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.averageGrade = averageGrade;
}

var marko = new Student("Marko", "Milosevic", 26, 9.50);

console.log(marko);
console.log(marko.__proto__)

/* TASK 2:

Create a constructor function for generating objects with data about players of your favorite football team 
(name, age, goals scored, yellow cards). You can find statistics online. */

console.log("TASK 2:");

function FootballPlayer(name, age, goals, yellowCards) {
  this.name = name;
  this.age = age;
  this.goals = goals;
  this.yellowCards = yellowCards;
}

var joeGomez = new FootballPlayer ("Joe Gomez", 23,16,4);
var andrewRobertson = new FootballPlayer ("Andrew Robertson", 20,10,1);
var sadioMane = new FootballPlayer ("Sadio Mane", 18,8,0);
var allisonBecker = new FootballPlayer ("Allison Becker", 22,12,2);
var necoWilliams = new FootballPlayer ("Neco Williams", 21,7,0);

console.log(joeGomez, andrewRobertson, sadioMane, allisonBecker, necoWilliams);



/* TASK 3:

Try to do the same thing as in the previous task, but when creating player objects try to do it dinammicaly (using loop).
For that you'll need data in following format:

var players = [["Player name", 27, 12, 4], ["Player name", 27, 12, 4], ["Player name", 27, 12, 4]];

This array is just example, change data in this array with data of players you choose. */

console.log("TASK 3:");

var players = [["Joe Gomez", 23, 16, 4],["Andrew Robertson", 20, 10, 1],["Sadio Mane", 18, 8, 0],["Allison Becker", 22, 12, 2],["Neco Williams", 21, 7, 0]];

function playerTaskThree (a) {
  var playersArray = [];
  for(var i = 0; i<a.length; i++) {
    playersArray[playersArray.length] = new FootballPlayer (a[i][0],a[i][1],a[i][2],a[i][3]);
  }
  return playersArray;
}

console.log(playerTaskThree(players));


/* TASK 4:

Create a construction function that should contain properties for first number, second number, and method. 
Then create a four instances of object from that constructor, each with different numbers, and different method. 
First should have method for multiplying of its own numbers, second for dividing, 
third for adding and fourth for subtracting. */

console.log("TASK 4:");

var multiplying = function(a,b) {
  return a*b;
}

var dividing = function(a,b) {
  return a/b;
}

var adding = function(a,b) {
  return a+b;
}

var subtracting = function(a,b) {
  return a-b;
}

function Calculator(firstNumber, secondNumber, operation) {
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;
  this.operation = operation(this.firstNumber, this.secondNumber);
}

var exampleOne = new Calculator(5,5,multiplying);
console.log(exampleOne);

var exampleTwo = new Calculator(36,9,dividing);
console.log(exampleTwo);

var exampleThree = new Calculator(4.1,3.9,adding);
console.log(exampleThree);

var exampleFour = new Calculator(10,3,subtracting);
console.log(exampleFour);

/* TASK 5:

Test your understanding of closures and scope with following examples.

IMPORTANT! - First read the task and try to give an answer,
and then copy the code to your file and check what do you get in console.


    QUESTION 1:

  What’s the result of executing this code and why?


    ANSWER 1:
  --- the result is: 

  undefined 
  2

  because var a is called in console.log before declaration, 
  and the number two will be visible in console.log because function foo() is defined as function declaration.
  All that happened because of creation faze of hoisting.


    QUESTION 2:

  What is result?

    ANSWER 2:
  --- the result is: 

  nothing, 
  if we console.log firstResult and result:

      function otherFunction(input) {
        return a;
      }
      5


    QUESTION 3:

  What is the result of the following code? Explain your answer.

    ANSWER 3:
  --- the result is: 

  Aurelio De Rosa       -  because Aurelio De Rosa is scope for fullname in obj.properties
  function() {
    return this.fullname;
  }
  John Doe              -  because John Doe is scope for fullname in test();


    QUESTION 4:

  What will you see in the console for the following example?

    ANSWER 4:
  --- the result is:
    
    1
*/

