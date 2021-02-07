/* ***** JS PREDEFINED FUNCTIONS HOMEWORK *****

TASK 1
Based on given string:

"Lorem ipsum dolor sit amet"

Create a function that should receive string, and transform all letters to lowercase. */

console.log("TASK 1");

var stringTaskOne = "Lorem ipsum dolor sit amet";

function transformStringInToLowerCase (a) {
  return a.toLowerCase();
}

var resultTaskOne = transformStringInToLowerCase(stringTaskOne);

console.log(resultTaskOne);

/* TASK 2

Based on given string:

"Lorem ipsum dolor sit amet"

Create a function that should check if there is a word "sit" in the string,
 and console log sentence saying that it exist or not. */

console.log("TASK 2");

var stringTaskTwo = stringTaskOne;

function isThereInputedWord (sentence, word) {
  if(sentence.indexOf(word) > -1) {
   console.log("In this sentence exists word: "+word);
  } else {
   console.log ("In this sentence word '" +word+ "' doesn't exist.")
  }
}

isThereInputedWord(stringTaskTwo, "sit");

/* TASK 3

Based on given string:

"Lorem ipsum dolor sit amet"

Create a function that should find and return index of the last letter in the sentence. */

console.log("TASK 3");

var stringTaskThree = stringTaskOne;

function indexOfTheLastLetterInTheSentence (sentence) {
  var indexOfLastLetter = sentence.length - 1;
  return indexOfLastLetter;
}

var lastLetterOfStringTaskThree = indexOfTheLastLetterInTheSentence(stringTaskThree);

console.log("Index of the last letter in the sentence is: "+lastLetterOfStringTaskThree);

/* TASK 4

Based on given string:

"Lorem ipsum dolor sit amet"

Create a function that should split string based on empty space, and return first 3 results. */

console.log("TASK 4");

var stringTaskFour = stringTaskOne;

function splitSentenceOnEmptySpaceAndReturnFirstThreeResults (sentence) {
  var splitedSentence = sentence.split(" ");
  var firstThreeResults = splitedSentence.slice(0,3);
  return firstThreeResults;
}

var resultOfTaskFour = splitSentenceOnEmptySpaceAndReturnFirstThreeResults (stringTaskFour);

console.log(resultOfTaskFour);


/* TASK 5

Based on given string:

"Piter is an actor."

Create a function that should turn a string into the following string:

"Pitor is an acter." */

console.log("TASK 5");

var stirngTaskFive = "Piter is an actor.";

function findingLetters(sentence, x, y) {

  var indexArray = [];
  for(var i=0; i<sentence.length; i++) {
    if(sentence[i]===x || sentence[i]===y){
      indexArray.push([sentence[i], i]);
    }
  }
  return indexArray;
}

function separateString(sentence,separatePoint, m) {
  var firstPart = sentence.substring(0, separatePoint);
  var secondPart = sentence.substring(separatePoint+1);
  sentence = firstPart + m + secondPart;
  return sentence;
}

function changingXToYAndYToX (sentence, x, y) {
  var newSentence = sentence;
  var indexArray = findingLetters(newSentence,x,y);
  console.log(indexArray);

  for(var i=0; i<indexArray.length; i++) {
    var charAtIndex = newSentence.charAt(indexArray[i][1]);
    if (charAtIndex === x) {
      newSentence = separateString(newSentence, indexArray[i][1], y);
    } else if (charAtIndex === y) {
      newSentence = separateString(newSentence, indexArray[i][1], x);
    }
  }

  return newSentence;
}

var test = changingXToYAndYToX(stirngTaskFive,"i","a");
var resultOfTaskFive = changingXToYAndYToX(stirngTaskFive,"o","e");

console.log(stirngTaskFive);
console.log(test);
console.log(resultOfTaskFive);


/* TASK 6

Based on given array:

var someData = [34, 23, 14, 56, 23, 44, 65];

Create a function that should remove number 56 from an array and return array without it. */

console.log("TASK 6");

var someData = [34, 23, 14, 56, 23, 44, 65];

function removingNumber (data, number) {
  for(var i=0; i<data.length; i++) {
    if(data[i]===number) {
      data.splice(i, 1);
    }
  }
  return data;
}

console.log(removingNumber(someData, 56));

/* TASK 7

Based on given array:

var someData = [34, 23, 14, 56, 23, 44, 65];

Create a function that should turn it into following array:

var otherData = [23, 14, 56, 65, 44, 23]; */

console.log("TASK 7");

someData = [34, 23, 14, 56, 23, 44, 65];

function removingFirstFromHalfReverse (someData) {
  someData.shift();
  var half = someData.length/2;
  var halfRound = half.toFixed(0);
  var newData = someData.splice(halfRound);
  var newDataReverse = newData.reverse();
  var result = someData.concat(newDataReverse);
  return result;
}

var resultOfTaskSeven = removingFirstFromHalfReverse(someData);

console.log(resultOfTaskSeven);

/* TASK 8

Based on given array:

var someData = [334, 233, 212, 199, 154, 122];

Create a function that should repack array to the new one,
where each element should be current one,
reduced by value of previous one from initial array. */

console.log("TASK 8");

someData = [334, 233, 212, 199, 154, 122];

function reducedByValueOfPrevious (data) {
  var dataNew = data.map(function (item, index) {
    if(data.indexOf(item)===0) {
      return item;
    }
    return item - data[index-1];
  });
  return dataNew;
}

console.log(reducedByValueOfPrevious(someData));

/* TASK 9

Based on given array:

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
]

Create a function that should return new array with all students whose average grade is larger than 8.5.
In new array, average grade should be formatted to 2 decimals. */

console.log("TASK 9");

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 7
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
]

function filterForGrade (data) {
  var eightPointFive = data.filter(function(item) {
    return item.avgGrade > 8.5;
  });

  var twoDecimals = eightPointFive.map(function (item) {
    var two = item.avgGrade.toFixed(2);
    item.avgGrade = two;
    return item;
  });

  return eightPointFive;
}

console.log(filterForGrade(students))