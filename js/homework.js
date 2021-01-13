/*TASK 1:
There are two arrays:

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

Repack old array to the new one, in the same order

Console log result*/
console.log("TASK 1");

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

var i = 0;

while (i<dataOld.length) {
	dataNew[i] = dataOld[i];
	i++;
}

console.log("dataNew: "+dataNew);


/*TASK 2:

There are two arrays:

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

Repack old array to the new one, in the reverse order

Console log result*/
console.log("TASK 2");

for(var i=0; i<dataOld.length;i++) {
	dataNew[i]=dataOld[dataOld.length-1-i];
}

console.log("dataNew reverse: "+dataNew);


/*TASK 3:

There are two arrays:

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];

Repack old array to the new one, so the data from two arrays is joined, starting with existing data from the new one.

Console log result*/
console.log("TASK 3");

dataNew = [12, "Jack"];
//console.log(dataNew.length);

for(var i=0; i<dataOld.length; i++) {
	dataNew[dataNew.length]= dataOld[i];
}

console.log("dataNew joined: "+dataNew);

/*TASK 4:

There are two arrays:

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];

Create a new array that contains data from both arrays, starting with data from array a.

Console log result*/
console.log("TASK 4");

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];

var newArray = [];

var j=0;
while(j<a.length) {
	newArray[newArray.length]=a[j];
	j++;
	if(newArray.length===a.length) {
		var m = 0;
		while(m<b.length) {
			newArray[newArray.length] = b[m];
			m++;
		}
	}
}

console.log("newArray: "+newArray);

/*TASK 5:

There are two arrays:

var a = [12, 56, 32, 44];
var b = [88, 7, 13];

Create a new array that contains data from both arrays, but in alternating order, one element from array a, then one element from array b, and so on. In the end it should look like this:

[12, 88, 56, 7, 32, 13, 44]

Console log result*/
console.log("TASK 5");

a = [12, 56, 32, 44];
var newArray2=[];

var m = 0;
var n = 0;
for(var i=0; i<(a.length+b.length); i++) {
	
	if(i===0 || i%2===0) {
		newArray2[i] = a[m];
		m++;
	} else {
		newArray2[i] = b[n];
		n++;
	}
}
console.log("newArray2: "+newArray2);

/*TASK 6:

Console log next pattern (you're allowed to use only single *)

*
**
***
****
*****
****** */
console.log("TASK 6");

var v=0;
var star = "*";
var starArray = [];

while(v<=5) {
	starArray[starArray.length]=star;
	console.log(""+[starArray.join("")]);
	v++;
}

/* TASK 7:

Console log next pattern (you're allowed to use only single * or empty space)

**********
*        *
*        *
*        *
*        *
********** */
console.log("TASK 7");

for (var i=1; i<=6; i++) {
	var newStarArray=[];
	if(i===1 || i===6) {
		for(var j=1; j<=10; j++) {
			newStarArray[newStarArray.length]=star;
		}
	} else {
		var empty= " ";
		for(var m=1; m<=10; m++) {
			if(m===1 || m===10) {
				newStarArray[newStarArray.length]=star;
			} else {
				newStarArray[newStarArray.length]=empty;
			}
		}
	}
	console.log(""+[newStarArray.join("")]);
}
