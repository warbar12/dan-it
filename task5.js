/*
1) Опишіть своїми словами, що таке метод об'єкту.
2) Який тип даних може мати значення властивості об'єкта?
3) Об'єкт це посилальний тип даних. Що означає це поняття?

1) Это возможность упростить работу, если есть что-то, что может быть видоизменено и это часто использузуют,
создают метод который волняет определенную логики. И при этом без добаления лишнего кода или действий.
2) ключь и значения ключа, функцію,
3) он служит для вызова метода, что-бы получить обьект и утавновить для него this.
он нужен когда метод получается динамически с объекта, используя выражение.
*/


function createNewUser(){
  
  const firstName = prompt("Add your name");
  const lastName =  prompt("Add your surname");

  const newUser = {
    _name :firstName,
    _secondName :lastName,

  // запрет изменения на прямую имя 
    set name(value){
      if(value?.length < 2) this._name = value;
    },
    get name(){
      return this._name
    },

  // запрет изменения на прямую фамилию
    set secondName(value){
      if(value?.length < 3) this._secondName = value;
    },
    get secondName(){
      return this._secondName
    },

    // доступ до изменения имени и фамилии
    setFirstName(value){
      return this._name = value;
    },
    setLastName(value){
      return this._secondName = value;
    },

  // возвращает значение в нижнем регистре 
    getLogin: function(){
      return (this._name[0] + this._secondName).toLowerCase()
    }
  }

  let showInfo = newUser.getLogin();
  console.log(showInfo)

  return newUser;
}

console.log(createNewUser())