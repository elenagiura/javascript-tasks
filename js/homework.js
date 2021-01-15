/* TASK 1:

Create a function that should receive an array, and return an array in reverse order. Result should be stored in a variable */
console.log("*TASK 1*");

function array (a) {
	i=0;
	var reverse = [];
	while(a.length>i) {
		reverse[i] = a[a.length-1-i];
		i++;
	}
	return reverse;
}
var reverseArray = array([1,2,3,4,5,6,7,8,9,10]);
console.log(reverseArray);

/* TASK 2: 

Create a function that should receive parameter of any type, and console log the type of received data */
console.log("*TASK 2*");

var typeOf = function (data) {
	console.log(typeof(data));
}

typeOf("Mike");
typeOf(false);
typeOf(9.85);

/* TASK 3: 

Create a function that should receive an array of at least five names, and return the length of the longest name in the array
(hint - you can get the length of an string the same way as for array). Result should be stored in a variable */
console.log("*TASK 3*");

function longestName(names) {
	if(names.length<5) {
		return console.log("You should input at least 5 names.");
	}
	var name = names[0];
	for(i=0; i<names.length; i++) {
		if (name.length>=(names[i].length)) {
			continue;
		} else {
			name = names[i];
		}
	}
	return name;
}

var result = longestName(["Nina","Cleopatra","Dean","Constantin","John","Jim"]);
console.log(result);

/* TASK 4: 

Create a function that should receive an array of numbers, find the second lowest and second greatest number, 
and console log result */
console.log("*TASK 4*");

function deleteGreatestAndLowest (greatestNumber, lowestNumber, array) {
		for(i=0; i<array.length; i++) {
			if(array[i]===lowestNumber) {
				delete array[i];
				lowestNumber=array[0];
			} else {
				if(greatestNumber===array[i]) {
					delete array[i];
					greatestNumber=array[0];
				} else {
					continue;
				}
			}
		}
		return array;
}

function finding(array) {
	var greatestNumber=array[0];
	var lowestNumber=array[0];
		for(i=0; i<array.length; i++) {
			if(array[i]<=lowestNumber) {
				lowestNumber = array[i];
			} else {
				if(greatestNumber<array[i]) {
					greatestNumber=array[i];
				} else {
					continue;
				}
			}
		}

	return [greatestNumber, lowestNumber];
}

function secGreatAndSecLow(array) {
	var newArray = finding(array);
	newArray = deleteGreatestAndLowest(newArray[0], newArray[1], array);
	newArray = finding(newArray);

	return console.log("The second greatest number is: "+newArray[0]+ " and the second lowest number is: "+newArray[1]);
}

secGreatAndSecLow([55,7,4,0,6,145,75,3,-5,-4]);

/* TASK 5:

Create two functions. First one should receive two parameters, an array of numbers, and a single number. 
Then it should call the second function, and pass the same array and number into it. 
The second function should, based on an array and number provided, 
find all numbers in an array which are bigger then a provided number, and create an array of those numbers. 
Then it should console log result. */
console.log("*TASK 5*");

function secondArray(array, number) {
	var newArray = [];
	for(i=0; i<array.length; i++) {
		if(array[i]>number) {
			newArray[newArray.length] = array[i];
		} else {
			continue;
		}
	}
	return console.log("Greater numbers than number "+number+" from array: "+array+" are: " +newArray);
}

function firstArray(array, number) {
	return secondArray(array, number);
}

firstArray([1,55,6,34,54,8,9],15);

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







