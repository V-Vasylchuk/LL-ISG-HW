'use strict';

// What is the last value alerted by this code?
let i = 3;

while (i) {
	alert(i--); // 1
}

// For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not ?

// 1. The prefix form++i:
let index1 = 0;
while (++index1 < 5) {
	alert(index1); // 1 2 3 4
}

// 2. The postfix form i++
let index2 = 0;
while (index2++ < 5) {
	alert(index2); // 1 1 2 3 4 5
}


// For each loop write down which values it is going to show.Then compare with the answer.
// Both loops alert same values or not ?

// 	1. The postfix form:
for (let i = 0; i < 5; i++) {
	alert(i); // 0 1 2 3 4 
}

// 2. The prefix form:
for (let i = 0; i < 5; ++i) {
	alert(i); // 0 1 2 3 4
}

// Use the for loop to output even numbers from 2 to 10.
for (let index = 2; i <= 10; index++) {
	if (index % 2 == 0) {
		alert(index);
	}
}

// Rewrite the code changing the for loop to while without altering its behavior(the output should stay same).
let index3 = 0;
while (index3 < 3) {
	alert(`number ${index3}!`);
	index3++
}

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input / enters an empty line.
// Here we can assume that the visitor only inputs numbers.There’s no need to implement a special handling for a non - numeric input in this task.

let number;
do {
	number = prompt('Enter a number greater than 100?', 0);
} while (number <= 100 && number);

// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2, 3, 5, 7.
// P.S.The code should work for any n, not be hard - tuned for any fixed value.

let value = 10;

nextPrime:
for (let index = 2; index <= value; index++) {
	for (let innerIndex = 2; innerIndex < index; innerIndex++) {
		if (index % innerIndex == 0) {
			continue nextPrime;
		}
	}
	alert(index);
}
