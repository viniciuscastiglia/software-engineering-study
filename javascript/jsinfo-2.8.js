// 1- What are the final values of all variables a, b, c and d after the code below?

let h = 1, l = 1;

let c = ++h; // 2
let d = l++; // 1
//h = 2, l = 2

// 2- What are results of these expressions?

"" + 1 + 0 //10
"" - 1 + 0  //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" // 9px
"$" + 4 + 5 //$45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // -9 5
"  -9  " - 5 //-14
null + 1 // 1
undefined + 1 //NaN
" \t \n" - 2 //-2

// 3- Here’s a code that asks the user for two numbers and shows their sum.
//It works incorrectly. The output in the example below is 12 (for default prompt values).
//Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

/* 
let a = parseInt(prompt("First number?", 1));
let b = parseInt(prompt("Second number?", 2));

alert(a + b); // 3 */ 