const date = document.querySelector(".qwe")//"тут ты пишешь название класса последнего блока где будет дата"
let day = new Date();
let today = day.toLocaleDateString('ru-RU');
date.insertAdjacentHTML('afterbegin', today)



