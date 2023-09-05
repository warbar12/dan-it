/*
1. Чому для роботи з input не рекомендується використовувати клавіатуру?
Так как на данный момет не обезательно печать текст, а можно его вставить и по этому,
если мы хотим корректно отслеживать ввод в поле <input>, то одних клавиатурных событий недостаточно. 
Существует  событие input, чтобы отслеживать любые изменения в поле <input>. И оно справляется задачами намного лучше.
Событие input срабатывает каждый раз при изменении значения.В отличие от событий клавиатуры, 
оно работает при любых изменениях значений, даже если они не связаны с клавиатурными действиями.
*/

const button = document.querySelectorAll('.btn')
const btn = [...button]

btn.forEach(data => {
  data.setAttribute("data-set",`${data.innerText}`);
  data.setAttribute("data-lower",`${data.innerText.toLowerCase()}`)
})


window.addEventListener("keydown", event => {

  btn.forEach((item, i) => {
 
    if(event.key === item.dataset.set || event.key === item.dataset.lower){
      document.querySelector('.active')?.classList.remove('active');
      item.classList.add('active');
    }

  })

})

