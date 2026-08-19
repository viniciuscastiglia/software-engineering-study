/*Rewrite 'if' into '?'
Rewrite this if using the conditional operator '?':*/

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let results = (a + b < 4) ? 'Below' : 'Over'

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let messages = (login == 'Employee') ? 'Hello' :
 (login == 'Director') ? 'Greetings' :
 (login == '') ? 'No login' : '';