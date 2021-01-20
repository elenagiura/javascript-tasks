
/* TASK 6:

Create three functions. 

First one should receive an array and return the lowest number in the array.
Second one should receive an array and return the highest number if an array.

Third function should receive first two functions,
and should multiply the result of the first function with the result of the second function. 
Then it should console log the result. */
console.log("*TASK 6*");

var taskSixArray = [3,5,6,55,100,32,6,-2,9];

function greatestNumber(array) {
	var greatestNumber=array[0];
	for(i=0; i<array.length; i++) {
		if(array[i]<=greatestNumber) {
			continue;
		} else {
			greatestNumber=array[i];
		}
	}
	return greatestNumber;
}

function lowestNumber(array) {
	var lowestNumber=array[0];
	for(i=0; i<array.length; i++) {
		if(array[i]>=lowestNumber) {
			continue;
		} else {
			lowestNumber=array[i];
		}
	}
	return lowestNumber;
}

function multiply (numberOne, numberTwo) {
	var multiply = numberOne(taskSixArray) * numberTwo(taskSixArray);
	console.log(multiply);
}


multiply(greatestNumber, lowestNumber);


/*TASK 7:
Create a function that should receive an array and the second function.

Array should be:

[15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64]

After array is received you should find all numbers from array which are unique, and create a new array out of them. 
Then, the second function that is passed in the first one should be called, and it should receive this new array we created.
It should then delete the biggest number in the array, and console log the result (array). */

console.log("TASK 7");

var array = [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];


function deleteBiggestNumber(array) {
	var biggestNumber=array[0];
	for(i=0; i<array.length; i++) {
		if(array[i]<=biggestNumber) {
			continue;
		} else {
			biggestNumber=array[i];
		}
	}
	for (j=0; j<array.length; j++) {
		if(biggestNumber===array[j]) {
			delete array[j];
		}
	}
	return console.log(array);
}

function uniqueNumbers (array, deteleFunction) {
	var newArray = [];
	
	for(i=0; i<array.length; i++) {
		var number = array[i];
		var unique=0;
		for(j=0; j<array.length; j++) {
			if(array[j]!==number) {
				unique++;
			} else {
				continue;
			}
		}
		if(unique===array.length-1) {
			newArray[newArray.length]=number;
		}
	}
	
	deteleFunction(newArray);
}

uniqueNumbers(array, deleteBiggestNumber);