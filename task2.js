/*
Теория
1) Які існують типи даних у Javascript?
2) У чому різниця між == і ===?
3) Що таке оператор?

1) Boolean, Number, String, Undefined, Null, BigInt, Object.
2) == сводит все к одному типу данных (1 == "1" - true), а === учитывает и тип данных и 
значение (1 === "1" - false)
3) Оператор – это внутренняя функция в js. При использовании того или иного оператора мы 
запускаем ту или другую встроенную функцию, которая выполняет какие-то определенное действия и возвращает результат.
*/


let userName = prompt("Add your name");
let userAge = +prompt("Add your age");

while(!userName || /\d/g.test(userName) || !userAge ){
  userName = prompt("Add your name again! Name or age is not correct!", `${userName}`)
  userAge  = +prompt("Add your age again! Name or age is not correct!", `${userAge}`);
}

if(userAge < 18) alert("You are not allowed to visit this website.");

if(userAge > 22) alert(`Welcome, ${userName}`);

if(userAge >= 18 && userAge <=22){
  const answer = confirm("Are you sure you want to continue?")
  if(!answer){
    alert(`You are not allowed to visit this website.`)
  }else{
    alert(`Welcome, ${userName}`)
  }
}




