/*
Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
- метод try...catch можно использовать при получение данных из сети, из сервера или от 
других источников которые передаеют набор данных..
*/

const books = [
  { 
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70 
  }, 
  {
   author: "Сюзанна Кларк",
   name: "Джонатан Стрейндж і м-р Норрелл",
  }, 
  { 
    name: "Дизайн. Книга для недизайнерів.",
    price: 70
  }, 
  { 
    author: "Алан Мур",
    name: "Неономікон",
    price: 70
  }, 
  {
   author: "Террі Пратчетт",
   name: "Рухомі картинки",
   price: 40
  },
  {
   author: "Анґус Гайленд",
   name: "Коти в мистецтві",
  }
];

books.forEach((item, index) =>{
  let objectLength = Object.keys(item).length;
  try{
    if (typeof item['author'] === "undefined")console.log(`У обьекта под номером - ${index} нету поля автора`);
    if (typeof item['name'] === "undefined")console.log(`У обьекта под номером - ${index} нету поля наименования`);
    if (typeof item['price'] === "undefined")console.log(`У обьекта под номером - ${index} нету поля прайс`);
  }finally{
    if(objectLength === 3){
      const html = 
        `<ul>
          <li>Автор - ${item.author}</li>
          <li>Наименование - ${item.name}</li>
          <li>Прайс - ${item.price}</li>
        </ul>`
      document.getElementById("root").insertAdjacentHTML('beforebegin', html);
    }
  }
})

