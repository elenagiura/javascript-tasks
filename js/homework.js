/* ***** JS BOM HOMEWORK *****


WHAT SHOULD YOU DO ?

TASK 1

Create a function that will ALERT if browser is online or not. */

console.log("TASK 1:");

/* Vladice ako bude zamrseno ovo sto sam radila ispravicu. Zamisao mi je bila da se Task 1 i 5 odmah izvrse,
nakon njih Task 6 i da se u zavisnosti od unetih vrednosti(ako ne postoji ili je null) Task 4 i 2 se izvrsavaju odmah,
a ako vrednost za Taks 6 postoji, onda Task 4 i 2 cekaju 60 s dok se ne obavi Task 6, s tim sto sam dodala po par sekundi,
da za to vreme moze da se proveri u konzoli da je localStorage ociscen.
Ovako mi je bilo preglednije u konzoli, posto sam se pogubila kad sam redom radila.*/ 

function onOrOffLine () {
  window.navigator.onLine ? alert("Browser is online") : alert("Browser is offline");
  console.log("Task 1 is completed.")
}

onOrOffLine();


/* TASK 2

Create a function that should, when run, reload the page. */

function refreshPage () {
  console.log("TASK 2:");
  console.log("Task 2 will be completed in next 5s.");

  setTimeout(done, 5000);
}

function done () {
  window.location.reload();
}

/* TASK 3

Create a function that should, 3 seconds after page is loaded,
redirect you to google.com, ad then, 3 seconds after that take you back to your page. 
(Comment out your code once you're done so you can continue with the other tasks, as this will cause infinite loop). */

console.log("TASK 3:");

console.log("Task 3 is commented out.");

function changingPage () {
  window.location.href="https://www.google.com/";
}

//setTimeout(changingPage,3000);


/* TASK 4

Crete a function that should every second console log a number incremented by one. 
When number reach 15 it should stop running. */

function taskFour () {
  var printing = setInterval(numbToFifteen, 1000);

  var i = 0;

  function numbToFifteen () {
    if(i === 0) {
      console.log("TASK 4:");
    }
    i++
    i<=15 ? console.log(i) : clearInterval (printing);
  }
}


/* TASK 5

Create a function that should return a random number (round number) between 0 and 10, every time you run it. */

console.log("TASK 5:");

function randomNumber () {
  return Math.round(Math.random()*10);
}

var number = randomNumber();

console.log("Random number from 0 to 10 is: "+number);


/* TASK 6

  STEP 1
      Create an array of objects, containing at least 5 users. 
      Each of them should have name, age and status. 
      Status should be "inactive" for each of them.

  STEP 2
      Once page is loaded it should display a popup where user can enter his name. 
      Once it's done name user entered should be compared against existing users.

      If it doesn't match any user you should console log message: 

          "User with name " + name + " doesn't exist."

      If it match some of users, object with that user's data should be copied from array. 
      It's status should be changed to "active", and it should be saved in local storage using "loggedInUser" as a key.

  STEP 3
      After one minute user's data should be removed from local storage.

      You should console log a message that user is logged out. */
  
console.log("TASK 6:");

function Person (name, age) {
  this.name = name;
  this.age = age;
  this.status = "inactive";
}

var data = [new Person("John",34), new Person("Peter",40), new Person("Mike",18), 
new Person("Angela",30), new Person("Dean",20)];

var enteredName = prompt ("Enter your name:");

var nonMatchUsers = 0;

function searching () {

  for(var i = 0; i<data.length; i++) {
    if(data[i].name === enteredName) {
      var foundPerson = data[i];
      foundPerson.status = "active";
      console.log(foundPerson)
      localStorage.setItem("loggedInUser", foundPerson.name);
      setTimeout(remPerFromLocStor, 60000);
      function remPerFromLocStor(){
        localStorage.clear();
        foundPerson.status= "inactive";
        console.log("User "+ foundPerson.name +" is loggedOut");
        console.log(foundPerson)
      }
    } else {
      nonMatchUsers++;
    }
    if(nonMatchUsers===data.length) {
      console.log("User with name " + enteredName + " doesn't exist.");
    }
  }
}

searching();


/*RESULTS OF TASK 2 AND TASK 4*/

if(nonMatchUsers===data.length || enteredName===null) {
  setTimeout (taskFour,3000);
  setTimeout(refreshPage, 20000);
} else {
  setTimeout (taskFour,66000);
  setTimeout(refreshPage, 82000);
}

