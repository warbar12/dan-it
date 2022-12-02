
const firstUl = document.querySelector(".tabs");
const secondUl = document.querySelector(".tabs-content")
const buttonTab = [...firstUl.children];
const showContent = [...secondUl.children]

showContent.forEach((item, i) => {
  item.classList.add("tabs-content-info");
  if(i === 0) item.classList.add("active");
})

// add "data-set" attributes for each element 
buttonTab.forEach((item, index) => {
  item.setAttribute("data-set",`${index}`)
});

showContent.forEach((item, index) => {
  item.setAttribute("data-set",`${index}`)
});


firstUl.addEventListener('click', event => {
  if(event.target !== firstUl){
    buttonTab.forEach(item => {
        item.classList.remove('active')
      })
    }
    showContent.forEach(item => {
      if(item.dataset.set === event.target.dataset.set){
        item.classList.add("active")
      }else{
        item.classList.remove('active')
      }
    });
    event.target.classList.toggle('active')
})

