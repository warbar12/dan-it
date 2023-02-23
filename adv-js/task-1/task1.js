/*
Теория
1)Мы хотели бы повторно использовать то, что есть у объекта, но не копировать/переопределять его методы, 
а просто создать новый объект на основе существующего.
2)В конструкторе ключевое слово super() используется как функция, вызывающая родительский конструктор. 
Ее необходимо вызвать до первого обращения к ключевому слову this в теле конструктора. 
Ключевое слово super также может быть использовано для вызова функций родительского объекта.
*/ 

class Employee {
  constructor(options){
    this.name = options.name;
    this.age = options.age;
    this.salary = options.salary;
  }

  get peopleInfo() {
    return `My name - ${this.name}, i am ${this.age}, my salery - ${this.salary}$`
  }

  set peopleInfo(newSalary) {
    this.salary = newSalary;
  }

}

const firstPeople = new Employee({
  name:'Andrew',
  age: 23,
  salary: 800,
});

const secondPeople = new Employee({
  name: 'Vlad',
  age: 27,
  salary: 1250,
});

class Programmer extends Employee{
  constructor(options){
    super(options);
    this.lang = options.lang;
  }

  get programmerSelery(){
    return this.salary * 3 +`$`;
  }
}

const firstProgrammer = new Programmer({
  name: 'Andrew',
  age: 23,
  salary: 800,
  lang: 'JavaScript',
});
