/*TASK from class*/
console.log("TASK from class:");

var players = [["Mikey",5,14],["Leon",4,23],["John",1,5],["Filip",7,31],["Dean",6,21],["Grorge",2,12]];

function repackPlayers (array) {
  for(var i=0; i<players.length; i++) {
    var repackInObject = {};
    repackInObject.name=array[i][0];
    repackInObject.titules=array[i][1];
    repackInObject.goals=array[i][2];
    array[i]=repackInObject;
  }
  console.log(array);
}

repackPlayers(players);

/*TASK 1: 

Based on existing object:

var person = {
	name: "Mike";
	age: 28,
	married: true
}

Create a function which should change age to 34, and delete married property. In the end console.log object.*/
console.log("TASK 1:");

var person = {
  name: "Mike",
  age: 28,
  married: true
}

function changeData() {
  person.age = 34;
  delete person.married;
}

console.log(person);

changeData();

console.log(person);


/*TASK 2: 

Based on existing object:

var person = {
	name: "Jack";
	age: 32,
	married: true
}

Create a function which should check if person has children property, if not add it.
Its value should be array containing two objects with children data. Each object should contain child name, age and gender.*/
console.log("TASK 2:");

person = {
  name: "Jack",
  age: 32,
  married: true
}

function ifPersonHasChildren() {
  if(person.hasOwnProperty("children")===true) {
    console.log("Children property already exist.");
  } else {
    person.children = [
    {
      name:"Jane",
      age: 11,
      gender: "female"
    },
    {
      name:"Mike",
      age: 5,
      gender: "male"
    }
    ];
    console.log(person);
  }
}

ifPersonHasChildren();

ifPersonHasChildren();


/*TASK 3:

Based on existing array of objects:

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

Create a function which should console.log if student passed exam, result should be something like:

"Jack passed exam" or "Mike didn't pass exam"*/
console.log("TASK 3:");

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

function examPassed() {
  for(var i=0; i<students.length; i++) {
    if(students[i].passed) {
      console.log(students[i].name +" passed exam.");
    } else {
      console.log(students[i].name +" didn't pass exam.")
    }
  }
}

examPassed();

/*TASK 4:

Based on existing array of objects:

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

Create a function which should repack existing data into three arrays, names, ages, and passed. Example of names array:

var names = ['Mike', 'Anna', 'Jack'];*/
console.log("TASK 4:");


function repackStudents() {
  var names = [];
  var ages = [];
  var passed = [];

  for(var i=0; i<students.length; i++) {
    names[names.length]=students[i].name;
    ages[ages.length]=students[i].age;
    passed[passed.length]=students[i].passed;
  }

  
  return [names, ages, passed];
}

console.log(repackStudents());


/*TASK 5:

Based on existing object:

var person = {
  name: "Jack";
  age: 32,
  married: true
}

Create the other object which should inherit data from existing object. 
Then console.log age by accessing the newly created object.*/
console.log("TASK 5:");

person = {
  name: "Jack",
  age: 32,
  married: true
}

var otherPerson = Object.create(person);

console.log("Age of otherPerson: "+otherPerson.age);



/*TASK 6:

Based on existing object:

var person = {
  name: "Mike";
  age: 28,
  married: true
}

Create a method which, when called, should console.log name and age of existing object.*/
console.log("TASK 6:");

person = {
  name: "Mike",
  age: 28,
  married: true,
  nameAndAge: function() {
    console.log("Name of this person is: "+this.name+". And his age is: "+this.age);
  }
}

person.nameAndAge();


/*TASK 7:

Based on existing object:

var person = {};

Create a method which should create name, age and married properties in existing object, based on parameters passed in method.*/
console.log("TASK 7:");

person = {};

console.log(person);

Object.prototype.nameAgeMarried = function (name, age, married) {
    this.name = name;
    this.age = age;
    this.married = married;
}

person.nameAgeMarried("Anna", 18, false);

console.log(person);

