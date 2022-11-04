
// task 1

let number = +prompt("Введите число!");

while(Number.isInteger(number) == false){
  number = +prompt("Введите целое число!")
}
if( number < 5){
  console.log("Sorry, no numbers")
}else{
  for(let i=0; i <= number; i++){
    if(i % 5 === 0) console.log(i);
  }
}

// task 2

let m = +prompt("Введите начальное число!");
let n = +prompt("Введите конечное число!");

while(Number.isInteger(m) == false || Number.isInteger(n) == false ){
  m = +prompt("Введите заново начальное число!");
  n = +prompt("Введите заново конечное число!")
}
if(m >= n){
  console.log(" Вы ввели не верный диапазон чисел. Нажмите F5");
}else{
  for(let i = m; i <= n; i++){
    console.log(i)
  }
}

