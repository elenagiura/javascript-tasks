/* ***** JS PRACTISING *****

TASK 1:

Based on object:

var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

Create a function that should receive this object,
and repack it to the new object where values from previous object represent both,
 keys and values of the new object. */

console.log("TASK 1:");

var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

function repackTaskOne (person) {
  var repackPerson = new Object();
  repackPerson[person.name] = person.name;
  repackPerson[person.lastName] = person.lastName;
  repackPerson[person.status] = person.status;

  return repackPerson;
}

console.log(repackTaskOne(someData));

/* TASK 2: 

Based on array:

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

Create a function that should repack this array to another one where all numbers are contained in the same array,
in the exact order like in provided array. */

console.log("TASK 2:");

someData = [13, 45, 56, [32, 11], 27, [55, 92]];

 function repackTaskTwo (numbersArray) {
  var newArrayOfNumbers = new Array();
  for(var i=0; i<numbersArray.length; i++) {
    if(numbersArray[i].length) {
      for(var j=0; j<numbersArray[i].length; j++) {
        newArrayOfNumbers[newArrayOfNumbers.length] = numbersArray[i][j];
      }
    } else {
      newArrayOfNumbers[newArrayOfNumbers.length] = numbersArray[i];
    }
  }
  return newArrayOfNumbers;
} 

console.log(repackTaskTwo(someData));

/* TASK 3: 

Based on array:

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

Create a function that should receive array, get both subarrays from parent array,
and pass it into another function, which should then join those arrays.
In the end result should be returned and stored in variable which contains first function. */

console.log("TASK 3:");

someData = [13, 45, 56, [32, 11], 27, [55, 92]];

var repackTaskThree = function(numberArray, joiningInnerArrays) {
  var innerArrays = new Array();
  for(var i=0; i<numberArray.length; i++) {
    if(numberArray[i].length === false) {
      continue;
    } else {
      innerArrays = joiningInnerArrays(innerArrays, numberArray[i]);
    }
  }

  return innerArrays;
}

var creatingNewArray = function (a, b) {
  for(var i=0; i<b.length; i++) {
    a[a.length] = b[i];
  }
  return a;
}

console.log(repackTaskThree(someData, creatingNewArray));

/* TASK 4:

Based on object:

var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

Create a function that should check if there is name in object,
if yes it should return another function which should remove name from the function,
if no then it should return a function which would set a name propery to the object,
  with the value passed once function is called. */

console.log("TASK 4:");

someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

function checkingName (a) {
  if(a.hasOwnProperty("name")) {
    return function () {
      delete a.name;
      console.log("The property name was deleted because it existed in the copied object.");
    }
  } else {
    return function (name) {
      a.name = name;
      console.log("The property name didn't exist in copied object. New value of the new created property is "+a.name);
    }
  }
}

checkingName(someData)("John");
checkingName(someData)("John");

/* TASK 5:

Based on object:

var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

Create a method that should check if there is name in object,
if yes it should create second method in the same object and then call it.
The second method should remove name from the function, and console log the object in it's current state. 
The second method should then create a third method and call it. 
Third method should add name property back to the object, with value of "Mike", and then console log object.

BONUS:

Try to set name with value it had before. */

console.log("TASK 5:");

someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

someData.checkingPropName = function(newName) {
  if(this.hasOwnProperty("name")) {
    var resetingName = newName;
    this.removingPropName = function (newName) {
      var firstName = newName;
      delete this.name;
      console.log(this);
      /* Vladice dodala sam sledecu liniju da console.log-uje samo ime,
      jer mi nije jasno sto u prethodnoj liniji izbacuje i name u propertijima(kad se otvori objekat sa strelicom u konzoli).
      Ovako radi - izbacuje undefined - videces kad pokrenes. Trazila sam na netu,
      ali se nisam nesto snasla */
      console.log("Name in current state: "+this.name);
      this.addingNewName = function (newName) {
        this.name = newName;
        console.log(this);
        console.log("Name in current state: "+this.name);
      }
      this.addingNewName(firstName);
    }
    this.removingPropName(resetingName);

  } else {
    console.log(this);
  }
}
console.log("Checking with name Mike");
someData.checkingPropName("Mike");

console.log("Checking with name Peter");
someData.checkingPropName("Peter");


/* ***** JS PRACTISE HOMEWORK *****

TASK 1:

Create array with data, and loop through it, so in the end you console log this:

"At position 0, subposition 0, value is 1"
"At position 0, subposition 1, value is 2"
"At position 0, subposition 2, value is 3"
"At position 1, subposition 0, value is 4"
"At position 1, subposition 1, value is 5"
"At position 1, subposition 2, value is 6"
"At position 2, subposition 0, value is 7"
"At position 2, subposition 1, value is 8"
"At position 2, subposition 2, value is 9" */

console.log("HOMEWORK TASK 1:");

var data = [[1,2,3],[4,5,6],[7,8,9]];

data.printData = function() {
  for(var i=0; i<this.length; i++) {
    for(var j=0; j<this[i].length; j++) {
      console.log("At position "+ i +", subposition "+ j +", value is "+this[i][j]);
    }
  }
}

data.printData();


/* TASK 2: 

Create a method that should console log name and age from any object.
Then create array with multiple objects, each object should contain different names and ages.
Call a method on each of them. */

console.log("HOMEWORK TASK 2:");

Object.prototype.printNameAndAge = function () {
  console.log("Name of this person is "+this.name+" and his age is "+this.age);
}

var persons = [
{
  name: "Mike",
  age: 44
},
{
  name: "John",
  age: 16
},
{
  name: "Ian",
  age: 28
},
{
  name: "Jim",
  age: 30
},
{
  name: "Dean",
  age: 15
}
];

function loopPersons (a) {
  for(var i=0; i<a.length; i++) {
    a[i].printNameAndAge();
  }
}

loopPersons(persons);

var someExample = {
  address: "Belgrade",
  phoneNumber: 123456789,
  age: 55
}

console.log("TEST");
someExample.printNameAndAge();