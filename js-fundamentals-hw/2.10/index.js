'use strict';

// Will alert be shown?

if ('0') {
	alert('Hello'); // Hello
}

// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript ?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know ? ECMAScript!”

let name = prompt('What is the “official” name of JavaScript?', '');

if (name == 'ECMAScript') {
	alert('Right!');
} else {
	alert('You don`t know? ECMAScript!');
}

// Using if..else, write the code which gets a number via prompt and then shows in alert:

let number = prompt('Type a number', '');
if (number > 0) {
	alert(1);
} else if (number < 0) {
	alert(-1);
} else {
	alert(0);
}

// Rewrite this if using the conditional operator '?':

let result = (a + b < 4) ? 'Bellow' : 'Over';

// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.

let message = (login == 'Employee') ? 'Hello' :
	(login == 'Director') ? 'Greetings' :
		(login == '') ? 'No login' :
			'';
