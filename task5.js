/*
1)Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування
- для упрощения работы со строками, в стоку можно передавть часть кода JS или что угодно. так как 
екранизировать мы можем разльчними способавми (\n, \b, \t ...) то это визуализирует вывод в читабельном формате.

2)Які засоби оголошення функцій ви знаєте?
- declaration, expression and arrow function.

3) Що таке hoisting, як він працює для змінних та функцій?
hoisting - объявление переменной или функции перемещается в начало кода, хотя в действительности этого не происходит,
бьявления переменных и функций попадают в память, но остаются в коде на том месте.
Одним из преимуществ помещения в память являеться возможность использовать функцию до ее объявления.
Переменные могут быть инициализированы и использованы до их объявления но не могут быть использованы без инициализации.
*/
function createNewUser(){
  
  const firstName = prompt("Add your name");
  const lastName = prompt("Add your surname");
  const myBirthday = () =>{

    let myDay = prompt("Add your birthday - dd.mm.yyyy");

    while((!myDay || /[a-zа-яё]/i.test(myDay)) || myDay?.length < 7){
      myDay = prompt("Add your birthday - dd.mm.yyyy");
    }

    // полученую дату розбиваем на массив 
    const correctDate = myDay.split('.');
     // получаем отдельно год
    const correctDateYear = correctDate[2];
    // получаем месяц(отсчет месяцев начинается с нуля 0 - январь, 10 - ноябрь) для валидности отнимаем 1
    const correctDateMonth = parseInt (correctDate[1]) - 1; 
     // получаем отдельно дату 
    const correctDateDate =  parseInt (correctDate[0]);
    // получаем валидную дату записуную в переменную 
    const birthday = new Date (correctDateYear, correctDateMonth, correctDateDate);
    // возвращаем дату в обьэкт 
    return birthday
  }

  const newUser = {
    _name :firstName,
    _secondName :lastName,
    _birthday: myBirthday(),

  // запрет изменения на прямую имя 
    set name(value){
      if(value?.length < 0) this._name = value;
    },
    get name(){
      return this._name
    },

  // запрет изменения на прямую фамилию
    set secondName(value){
      if(value?.length < 0) this._secondName = value;
    },
    get secondName(){
      return this._secondName
    },

    // access to change first and last name
    setFirstName(value){
      return this._name = value;
    },
    setLastName(value){
      return this._secondName = value;
    },

  // returns value in lowercase
    getLogin: function(){
      return (this._name[0] + this._secondName).toLowerCase()
    },

    // this method show your age right now, and considering upcoming birthday.
    getAge(){
      let day = new Date;
      let myDate = new Date(this._birthday);
      let age = day.getFullYear() - myDate.getFullYear();
      if(day.getMonth() == myDate.getMonth()){
        if(day.getDate() >= myDate.getDate()){
          return age
        }else{
          return age = age -1
        }
      }
      return age
    },

    // this method create your password
    getPassword(){
      let year = new Date(this._birthday)
      return (this._name[0].toUpperCase() + this._secondName.toLowerCase() + year.getFullYear())
    }
  }

  let yourAge = newUser.getAge();
  console.log(yourAge)

  let yourPasswod = newUser.getPassword();
  console.log(yourPasswod);

  let showInfo = newUser.getLogin();
  console.log(showInfo)

  return newUser;
}

console.log(createNewUser());