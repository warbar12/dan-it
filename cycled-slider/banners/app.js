"use strict"

/*
1) setTimeout() - вызывает функцию один раз через указаное время, setInterval() - каждырй раз по истечениювремени
2) Да, таким образом вызов функции будет запланирован сразу после выполнения текущего кода.
3) Для полуения уникального идитификатора который можно использовать для отмены дальнейшего выполнения.
*/

const play = document.getElementById('play')
const pause = document.getElementById('pause')

let isPaused = true;
let startTime = Date.now();

setInterval(function showImg() {

  if (isPaused) { 

    const interval = setInterval(function() {

      if (isPaused) { 
        const elapsedTime = Date.now() - startTime;
        const timer = document.getElementById("timer");
        timer.innerText = (elapsedTime / 1000).toFixed(2);
        
      if(timer.innerText >= 3.01) newDate();

    }

    }, 10); 

    const img = document.querySelector('.image-to-show.active');
    const nextImg = img.nextElementSibling;
  
    if (!!nextImg) {
      img.classList.remove('active');
      nextImg.classList.add('active');
    }
  
    if (!nextImg) {
      const firstImg = document.querySelector('.image-to-show');
      firstImg.classList.add('active');
      img.classList.remove('active');
    }
  
  }
 
}, 3000);

play.addEventListener("click", play => {
  isPaused = true;
})

pause.addEventListener("click", pause => {
  isPaused = false
})

function newDate(){
  startTime = Date.now()
}







