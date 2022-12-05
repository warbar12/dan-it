const btn = document.querySelector('.btn');
const invalid =  document.querySelector(".invalid_password")
const input = document.getElementsByTagName("input");
const addDataSetForInput = [...input];

const allIn = document.getElementsByTagName("i")
const showPassword = [...allIn]

// assign each element a unique attribute
addDataSetForInput.forEach((item, index) => {
  item.setAttribute("data-set",`${index}`)
});

// assign each element a unique attribute
showPassword.forEach((item, index) => {
  item.setAttribute("data-set",`${index}`)
});

//creating the ability to view the password with a change of picture
showPassword.forEach( i => {

  i.addEventListener( ('click'), e => {

    addDataSetForInput.forEach(item => {

      if(item.dataset.set === e.target.dataset.set){

        if(i.classList.contains('fa-eye')){
          i.classList.remove('fa-eye')
          i.classList.toggle("fa-eye-slash")
          item.setAttribute('type', 'text');
        }
        else{
          i.classList.remove('fa-eye-slash');
          i.classList.toggle("fa-eye");
          item.setAttribute('type', 'password');
        }
      }
    })
  })
})

btn.addEventListener(("click"), e => {

  const firstPassword = document.getElementById('first').value;
  const secondPassword = document.getElementById('second').value;
  
  if (firstPassword === "" && secondPassword === ""){
    invalid.insertAdjacentText("beforeend", "Потрібно ввести значення");
  } 

  else if (firstPassword === secondPassword){
    invalid.remove()
    alert("You are welcome");
  } 

  if(firstPassword !== secondPassword){
    invalid.insertAdjacentText("beforeend", "Потрібно ввести однакові значення");
  }
})