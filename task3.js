/*
Теория
1) Описати своїми словами у кілька рядків, навіщо у програмуванні потрібні цикли.
2) Опишіть у яких ситуаціях ви використовували той чи інший цикл в JS.
3) Що таке явне та неявне приведення (перетворення) типів даних у JS?

1) я считаю что цыкл нужен для того, что-бы не вылнять неколько одинаковых действий в ручную,
а также для упрощения работы с большим обьемом данных.
2) while - безконечный цыкл, пока я не получу нужный результат.
   for - для перебора чисел.
   for of - вызывая на каждом шаге итерации оператора для каждого значения из различных свойств объекта.
   for in - проход по массиву с получением ключа и значения под ключем.
3) Когда разработчик хочет намеренно произвести преобразование типов, Number(value), это называется явным преобразованием типов.
Так как JS это язык с динамической типизацией, преобразование между разными типами может происходить автоматически,
Это происходит когда вы применяете операторы к значениям разных типов, таких как 1 == null, 2 / `5`
Оператор строгого равенства === не приводит к неявному преобразованию типов. 
Оператор нестрогого равенства ==, в свою очередь, производит сравнение операндов, и когда требуется, неявное преобразование типов.
*/
// task 1

// let number = +prompt("Введите число!");

// while(Number.isInteger(number) == false){
//   number = +prompt("Введите целое число!")
// }
// if( number < 5){
//   console.log("Sorry, no numbers")
// }else{
//   for(let i=0; i <= number; i++){
//     if(i % 5 === 0) console.log(i);
//   }
// }

// // task 2

let m = +prompt("Введите начальное число!");
let n = +prompt("Введите конечное число!");

while(Number.isInteger(m) == false || Number.isInteger(n) == false ){
  m = +prompt("Введите заново начальное число!");
  n = +prompt("Введите заново конечное число!")
}
if(m >= n){
  console.log(" Вы ввели не верный диапазон чисел. Нажмите F5");
}else{
nextPrime:
  for (let i = m; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i);
  }
}

