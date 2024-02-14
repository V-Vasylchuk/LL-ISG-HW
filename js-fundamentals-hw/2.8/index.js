'use strict';

// What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

// What are the values of a and x after the code below?
let a2 = 2;
let x = 1 + (a *= 2); // 5

// What are the values of a and x after the code below?
'' + 1 + 0 // '10'
'' - 1 + 0 // -1
true + false // 1
6 / '3' // 2
'2' * '3' // 6
4 + 5 + 'px' // 9px
'$' + 4 + 5 // $45
'4' - 2 // 2
'4px' - 2 // NaN
'  -9  ' + 5 // '  -9 5'
'  -9  ' - 5 // -14
null + 1 // 1
undefined + 1 // Nan
' \t \n' - 2 // -2

//Fix the addition
let a1 = prompt('First number?', 1);
let b1 = prompt('Second number?', 2);
alert(+a1 + +b1);
