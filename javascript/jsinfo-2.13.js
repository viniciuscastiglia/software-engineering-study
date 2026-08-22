let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < numbers.length; i++){
    if ((numbers[i] % 2) === 0){
        console.log(numbers[i]);   
    }
}
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log(i);
}