/*
1) Описати своїми словами навіщо потрібні функції у програмуванні.
2) Описати своїми словами, навіщо у функцію передавати аргумент.
3) Що таке оператор return та як він працює всередині функції?

1) Для решения конкретного действия котое может повторятся несколько раз.
Делаешь функцию, которая выполняет определенную логику, и в том месте где она нужна, ты ее вызываешь.
Или для решение конкретных задачь.
2) Для того что-бы, потом переданый аргумент можно было задействовать в логике функции.
3) Так как каждая функция всегда возвращает значение. то с помощю оператора return ты можешь конкретизировать
что именно ты хочечь получить от функции. 
*/

let firstNumber = + prompt("Введите число Х");
let secondNumber = + prompt("Введите число У");
let operation = prompt("Введите нужное действие (+, -, *, /)");

while(!firstNumber || !secondNumber){
  if(!firstNumber) firstNumber = + prompt("Введите число Х еще раз") || firstNumber; 
  if(!secondNumber) secondNumber = + prompt("Введите число У еще раз") || secondNumber;
}
while(operation !="+" && operation !="-" && operation !="/" && operation !="*"){
  operation = prompt("Введите действие +, -, *, /"); 
}
  
function getRecult(x , y, mathematicawOperator){
  switch(mathematicawOperator){
    case "/":
    console.log(x / y);
    break
    case '+':
    console.log(x + y);
    break
    case '-':
    console.log(x - y);
    break
    case '*':
    console.log(x * y);
    break
  }
}

getRecult(firstNumber, secondNumber, operation)
